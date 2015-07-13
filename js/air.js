$(document).ready(function() {
  var acData = {}, rawACData;
  var keys = ['consumption', 'fan_speed', 'mode', 'automation_mode', 'temperature', 'powered', 'cost']
  var widthn = 700;
  var width = widthn + 'px';
  var heightn = 500;
  var height = 500 + 'px';
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  var filterKey = '';
  
  var consumption = d3.select("#consumption")
    .append("svg")
    .attr('width', width)
    .attr('height', height)
    .style('background-color', 'rgba(255, 255, 255, 0.82)');
  
    // Get List of readings from 1st day onward.
    $.ajax({
        url: "https://winkapi.quirky.com//air_conditioners/27273/readings/?since=1436572800&timezone=America/New_York",
        headers : {
            'Authorization': 'Bearer 9ee8a0121098f2aaca4189b5b951da85' 
          }

    }).then(function(data) {
       rawACData = data;
       setupChartData();
    });
  
  // Filter Function for filtering by type (aka key)
  function filterData(value, index, ar) {
    if(value.key === filterKey) {
      return true; 
    } 
    return false;
  }  
  
  // Function that Filters and sorts data by type (aka key)
  function setupChartData() {
    var l = keys.length;
    var temp;
    acData = {};
  
    for(var i = 0; i < l; i++) {
      filterKey = keys[i];
      temp = rawACData.data;
      acData[keys[i]] = temp.filter(filterData).sort(function(a,b) {
          if(a.created_at <= b.created_at) {
            return -1; 
          } else {
            return 1; 
          }
      });
    }
    
    drawConsumption();
  }
  
  function drawConsumption() {
    var minC = 0;
    var maxC = 0;
    var xScale = d3.scale.linear().domain([acData.consumption[0].created_at,acData.consumption[acData.consumption.length-1].created_at]).range([50, widthn - 50]);
    var yScale = d3.scale.linear().domain([0, 100]).range([100, heightn - 50]);
    
    var BTUtoKW = 0.00029307107;
    
    var points = consumption
      .selectAll('g')
      .data(acData.consumption)
      .enter()
      .append('g')
      .attr('class', 'datum')
      .each(function(d, i) {
        if(i === 0) {
          minC = d.value; 
        }
        if( d.value > maxC) {
           minC = d.value;
        }
        if( d.value < minC) {
          minC = d.value;
        }
      });
    
    yScale.domain([minC, maxC]);
    
    var lines = points.append('line')
      .attr('x1', function(d,i) {
          return xScale(d.created_at);
      })
      .attr('x2', function(d,i) {
          return xScale(d.created_at);
      })
      .attr('y1', function(d,i) {
          return heightn - 50;
      })
      .attr('y2', function(d,i) {
          return heightn - 50;
          
      })
      .style('stroke', '#073d4d')
      .attr('opacity', .5)
      .transition().duration(250)
      .delay(function(d,i) {
          return i * 5 + 50;
      }).attr('y2', function(d,i) {
          return yScale(d.value) + 3;
      })
      .style('stroke-width', '1px');
    
    
    var circles = points.append('circle')
      .attr('r', 3)
      .attr('cx', function(d,i) {
          return xScale(d.created_at);
      })
      .attr('cy', function(d,i) {
          return heightn;
      })
      .style('fill', '#0dbdf2')
      .style('opacity', .01)
      .transition().duration(function(d,i) {
        return .5/Math.sqrt(i);
      })
      .delay(function(d,i) {
          return i * 5;
      })
      .style('opacity', '.7')
      .attr('cy', function(d,i) {
          return yScale(d.value);
      });
    
    var hoverText = points.append('g').attr('class', 'hover-tip').style('opacity', function(d,i) {
      return '0';
    });
    
    hoverText.append('rect')
      .attr('x', function(d,i) {
          return xScale(d.created_at) - 50;
      })
      .attr('y', function(d,i) {
          return yScale(d.value) - 80;
      })
      .attr('width', 100)
      .attr('height', 60)
      .attr('rx', 15)
      .attr('ry', 15)
      .style('fill', 'rgba(7, 61, 77, 0.55)');
    
    hoverText.append('polygon')
      .attr('points', function(d,i) {
        return (xScale(d.created_at)  + 5) + ',' + (yScale(d.value) - 20) + ' ' + (xScale(d.created_at) - 5) + ',' + (yScale(d.value) - 20) + ' ' + (xScale(d.created_at)) + ',' + (yScale(d.value) - 5);
    })
      .style('fill', 'rgba(7, 61, 77, 0.55)');
    
    hoverText.append('text')
      .attr('x', function(d,i) {
          return xScale(d.created_at) - 40;
      })
      .attr('y', function(d,i) {
          return yScale(d.value) - 55;
      })
      .style('fill', 'rgba(255, 255, 255, 0.82)')
      .html(function(d,i) {
        return (d.value * BTUtoKW).toFixed(2);
    })
      .style('font-size', '1em')
      .style('font-family', 'OpenSans');

     hoverText.append('text')
      .attr('x', function(d,i) {
          return xScale(d.created_at) - 5 ;
      })
      .attr('y', function(d,i) {
          return yScale(d.value) - 60;
      })
      .style('fill', 'rgba(255, 255, 255, 0.82)').html('KW/h')
      .style('font-size', '.5em')
      .style('font-family', 'OpenSans');
    
    hoverText.append('text')
      .attr('x', function(d,i) {
          return xScale(d.created_at) - 38;
      })
      .attr('y', function(d,i) {
          return yScale(d.value) - 36;
      })
      .style('fill', 'rgba(255, 255, 255, 0.82)').html(function(d,i) {
        var date = new Date(d.created_at * 1000);
        return months[date.getMonth()] + ' ' + date.getDate() + ' - ' + date.getHours() + ':' + date.getMinutes();
    })
      .style('font-size', '.75em')
      .style('font-family', 'OpenSans');
    
    
      // tooltip hover states
      points.on('mouseover', function() {
          var t = d3.select(this)
          
          t.select('.hover-tip')
            .transition(150)
            .delay(10)
            .style('opacity', 1);
        
          t.select('line')
            .transition(150)
            .delay(10)
            .style('stroke-width', '3px');
        
          t.select('circle')
            .transition(150)
            .delay(10)
            .attr('r', 7)
            .style('opacity', '1');;
        
      }).on('mouseleave', function() {
            var t = d3.select(this)
          
            t.select('.hover-tip')
            .transition(150)
            .delay(10)
            .style('opacity', 0);
        
           t.select('line')
            .transition(150)
            .delay(10)
            .style('stroke-width', '1px');
          
            t.select('circle')
            .transition(150)
            .delay(10)
            .attr('r', 3)
            .style('opacity', '.7');
      });
    
    
    
  }
  
  
  
  
});

