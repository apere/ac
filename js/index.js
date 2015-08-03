var acData = {};
var bData = {};

var currTemp, currTempDate, idealTemp, idealTempDate, elecRate, electBudget, consumption, consumptionDate, cost, costDate, powerDate, power, speed, speedDate, mode, modeDate, totalCost, avgDCost;

var timeFormat = 'MMMM Do YYYY, h:mm a';

$( document ).ready(function() {
	currTemp = $('#current-temp .content');
	currTempDate = $('#current-temp-date .content');
	
	extTemp = $('#ext-temp .content');
	extTempDate = $('#ext-temp-date .content');
	
	idealTemp = $('#ideal-temp .content');
	idealTempDate = $('#idea-temp-date .content');
	
	elecRate = $('#electric-rate .content');
	elecBudget = $('#current-budget .content');
	
	consumption = $('#consumption .content');
	consumptionDate = $('#consumption-date .content');
	
	cost = $('#cost .content');
	costDate = $('#cost-date .content');
	
	power = $('#power-button');
	powerDate = $('#power-date .content');
	
	speed = $('#speed');
	speedDate = $('#speed-date .content');
	
	mode = $('#mode');
	modeDate = $('#mode-date .content');
	
	totalCost = $('#total-cost .content');
	avgDCost = $('#avg-daily-cost .content');
	avgMCost = $('#avg-monthly-cost .content');
	nAvgMCost = $('#ntl-avg-monthly-cost .content');
	
	power.on('click', function() {		
		var powered = {
			"powered": power.hasClass('active') + ""
		}
		console.log(powered);
		$.ajax({
			url: "https://winkapi.quirky.com/air_conditioners/27273",
			headers : {
				'Authorization': 'Bearer 9ee8a0121098f2aaca4189b5b951da85' ,
				'Content-Type': 'application/json'
			  },
			method: 'PUT',
			"Content": JSON.stringify(powered)
			

		}).then(function(data) {
			refreshAllData();
		});
	

	});
	refreshAllData();
}); 

function refreshAllData() {
	var now = new Date();
	var then = new Date('2015-05-01');
	then = then.getTime();
	now = now.getTime();
	then = parseInt(then);
	now = parseInt(now);
	
    // Get List of readings from 1st day onward.
    $.ajax({
        url: "https://winkapi.quirky.com/air_conditioners/27273",
        headers : {
            'Authorization': 'Bearer 9ee8a0121098f2aaca4189b5b951da85' 
          }

    }).then(function(data) {
		console.log(data);
       acData = data.data;
       setDataPoints();
    });
	

	 // Get List of readings from 1st day onward.
    $.ajax({
        url: "https://winkapi.quirky.com/air_conditioners/27273/stats/?timezone=America/New_York&since=0",
        headers : {
            'Authorization': 'Bearer 9ee8a0121098f2aaca4189b5b951da85' 
          }

    }).then(function(data) {
       bData = data;
       setDataPoints2();
    });
}

function setDataPoints() {
	var current = acData.last_reading;
	console.log(current);
	
	elecRate.fadeOut(function() {
	  	$(this).text("$" + acData.electric_rate + " kWh")
	}).fadeIn();
	
	//Current temperature (reading)
	currTemp.fadeOut(function() {
	  	$(this).text(current.temperature.toFixed(2) + ' C  |  ' + cToF(current.temperature).toFixed(2) + ' F')
	}).fadeIn();
	
	//current temperature last updated date
	currTempDate.fadeOut(function() {
		var date = new moment( current.temperature_updated_at * 1000  );
	  	$(this).text(date.format(timeFormat));
	}).fadeIn();
	
	//Current external temperature (reading)
	extTemp.fadeOut(function() {
	  	$(this).text(current.temperature.toFixed(2) + ' C  |  ' + cToF(current.external_temperature).toFixed(2) + ' F')
	}).fadeIn();
	
	//Current external temperature last updated date 
	extTempDate.fadeOut(function() {
		var date = new moment( current.external_temperature_updated_at * 1000 );
	  	$(this).text(date.format(timeFormat));
	}).fadeIn();
	
	//Ideal temperature (reading)
	idealTemp.fadeOut(function() {
		
		$(this).val( parseInt(cToF(current.max_set_point))  );
		$(this).next().text('| ' + current.max_set_point.toFixed(1) + 'c');
		
//	  	$(this).text(current.max_set_point.toFixed(2) + ' C  |  ' + cToF(current.max_set_point).toFixed(2) + ' F');
	}).fadeIn();
	
	//Ideal temperature last updated Date
	idealTempDate.fadeOut(function() {
		var date = new moment( current.max_set_point_updated_at * 1000 );
	  	$(this).text(date.format(timeFormat));
	}).fadeIn();
	
	//Consumption (reading)
	consumption.fadeOut(function() {
	  	$(this).text(current.consumption);
	}).fadeIn();
	
	//Consumption last updated Date
	consumptionDate.fadeOut(function() {
		var date = new moment( current.consumption_updated_at * 1000 );
	  	$(this).text(date.format(timeFormat));
	}).fadeIn();
	
	//Cost (reading)
	cost.fadeOut(function() {
	  	$(this).text('$' + current.cost + " Wh");
	}).fadeIn();
	
	//Coost last updated Date
	costDate.fadeOut(function() {
		var date = new moment( parseFloat(current.cost_updated_at) * 1000 );
	  	$(this).text(date.format(timeFormat));
	}).fadeIn();
	
	powerDate.fadeOut(function() {
		var date = new moment( parseFloat(current.powered_updated_at) * 1000 );
	  	$(this).text(date.format(timeFormat));
	}).fadeIn();
	
	if( current.powered ) {
		power.toggleClass('active', true);
	} else {
		power.toggleClass('active', false);
	}
}

function setDataPoints2() {
	var current = bData.data;
	console.log(current);
	
	totalCost.fadeOut(function() {
	  	$(this).text('$' + current.total_cost.toFixed(2));
	}).fadeIn();
	
	avgDCost.fadeOut(function() {
	  	$(this).text('$' + current.average_daily_cost.toFixed(2));
	}).fadeIn();
	
	avgMCost.fadeOut(function() {
	  	$(this).text('$' + current.average_monthly_cost.toFixed(2));
	}).fadeIn();
	
	nAvgMCost.fadeOut(function() {
	  	$(this).text('$' + current.national_average_monthly_cost.toFixed(2));
	}).fadeIn();
	
	
	
}

function cToF(c) {
	return (c * (9/5)) + 32;
}
