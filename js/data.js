
var auth = {
  "client_secret": "ce609edf5e85015d393e7859a38056fe", 
  "client_id": "quirky_wink_ios_app",
  "data": {
    "access_token": "9ee8a0121098f2aaca4189b5b951da85",
    "refresh_token": "789b45354728b27cdfd6ffd12c58b468",
    "token_type": "bearer",
    "token_endpoint": "https://winkapi.quirky.com/oauth2/token",
    "scopes": "full_access"
  },
  "errors": [],
  "pagination": {},
  "access_token": "9ee8a0121098f2aaca4189b5b951da85",
  "refresh_token": "789b45354728b27cdfd6ffd12c58b468",
  "token_type": "bearer",
  "token_endpoint": "https://winkapi.quirky.com/oauth2/token",
  "scopes": "full_access"
};

var devices = {
  "data": [
    {
      "last_reading": {
        "connection": true,
        "connection_updated_at": 1436210319.2108207
      },
      "dials": [
        {
          "name": "Time",
          "value": 61459,
          "position": 152.1583333333333,
          "label": "5:04 PM",
          "labels": [
            "5:04 PM",
            "New York"
          ],
          "brightness": 25,
          "channel_configuration": {
            "locale": "en_US",
            "timezone": "America/New_York",
            "channel_id": "1",
            "object_type": null,
            "object_id": null
          },
          "dial_configuration": {
            "max_position": 720,
            "max_value": 86400,
            "min_position": 0,
            "scale_type": "linear",
            "min_value": 0,
            "rotation": "cw",
            "num_ticks": 12
          },
          "dial_index": 0,
          "dial_id": "42473",
          "refreshed_at": 1436735059,
          "parent_object_type": "cloud_clock",
          "parent_object_id": "10506"
        },
        {
          "name": "Weather",
          "value": 1.08,
          "position": 5.832,
          "label": "88 °F",
          "labels": [
            "88 >f",
            "Partly Cloudy"
          ],
          "brightness": 25,
          "channel_configuration": {
            "location": "02143",
            "locale": "en_US",
            "lat_lng": [
              42.379264,
              -71.101174
            ],
            "units": {
              "temperature": "f"
            },
            "reading_type": "weather_conditions",
            "channel_id": "2",
            "object_type": null,
            "object_id": null
          },
          "dial_configuration": {
            "max_position": 135,
            "max_value": 25,
            "min_position": -135,
            "scale_type": "linear",
            "min_value": -25,
            "rotation": "cw",
            "num_ticks": 12
          },
          "dial_index": 1,
          "dial_id": "42474",
          "refreshed_at": 1436732956,
          "parent_object_type": "cloud_clock",
          "parent_object_id": "10506"
        },
        {
          "name": "Weather",
          "value": 1.08,
          "position": 5.832,
          "label": "31 °C",
          "labels": [
            "31 >c",
            "Partly Cloudy"
          ],
          "brightness": 25,
          "channel_configuration": {
            "location": "02143",
            "locale": "en_US",
            "lat_lng": [
              42.379264,
              -71.101174
            ],
            "units": {
              "temperature": "c"
            },
            "reading_type": "weather_conditions",
            "channel_id": "2",
            "object_type": null,
            "object_id": null
          },
          "dial_configuration": {
            "max_position": 135,
            "max_value": 25,
            "min_position": -135,
            "scale_type": "linear",
            "min_value": -25,
            "rotation": "cw",
            "num_ticks": 12
          },
          "dial_index": 2,
          "dial_id": "42475",
          "refreshed_at": 1436732960,
          "parent_object_type": "cloud_clock",
          "parent_object_id": "10506"
        },
        {
          "name": "Traffic",
          "value": 525615,
          "position": 0,
          "label": "146.0 HRS",
          "labels": [
            "146.0 HRS",
            "TO DEST"
          ],
          "brightness": 25,
          "channel_configuration": {
            "transit_mode": "ped",
            "stop_lat_lng": [
              38.883517,
              -76.997473
            ],
            "start_lat_lng": [
              42.379264,
              -71.101174
            ],
            "stop_location": "634 S Carolina Ave SE\\\nWashington? DC? 20003\\\nUnited States",
            "locale": "en_US",
            "start_location": "324 Washington St, Somerville, MA, United States",
            "reading_type": "travel_time",
            "channel_id": "3",
            "object_type": null,
            "object_id": null
          },
          "dial_configuration": {
            "max_position": 360,
            "max_value": 3600,
            "min_position": 0,
            "scale_type": "linear",
            "min_value": 0,
            "rotation": "cw",
            "num_ticks": 12
          },
          "dial_index": 3,
          "dial_id": "42476",
          "refreshed_at": 1436733190,
          "parent_object_type": "cloud_clock",
          "parent_object_id": "10506"
        }
      ],
      "alarms": [],
      "cloud_clock_triggers": [],
      "cloud_clock_id": "10506",
      "name": "Nimbus",
      "locale": "en_us",
      "units": {
        "temperature": "f"
      },
      "created_at": 1421816148,
      "hidden_at": null,
      "capabilities": {
        "configuration": null
      },
      "subscription": {
        "pubnub": {
          "subscribe_key": "sub-c-f7bf7f7e-0542-11e3-a5e8-02ee2ddab7fe",
          "channel": "67d1c692aa13787c6cfc183bb892a26401381600|cloud_clock-10506|user-163292"
        }
      },
      "user_ids": [
        "163292"
      ],
      "triggers": [],
      "device_manufacturer": "quirky_ge",
      "model_name": "Nimbus",
      "upc_id": "21",
      "lat_lng": [
        42.379257,
        -71.101058
      ],
      "location": "02143",
      "mac_address": "0c2a690688b9",
      "serial": "ADAA00037443"
    },
    // **** AIR CONDITIONER
    {
      "air_conditioner_id": "27273",
      "name": "chiltron",
      "locale": "en_us",
      "units": {
        "temperature": "f"
      },
      "created_at": 1436649232,
      "hidden_at": null,
      "capabilities": {
        "fields": [
          {
            "field": "units",
            "type": "nested_hash",
            "mutability": "read-write"
          }
        ]
      },
      "subscription": {
        "pubnub": {
          "subscribe_key": "sub-c-f7bf7f7e-0542-11e3-a5e8-02ee2ddab7fe",
          "channel": "04f90288da35f722b2a690cfbfb31805205a3421|air_conditioner-27273|user-163292"
        }
      },
      "user_ids": [
        "163292"
      ],
      "triggers": [],
      "desired_state": {
        "schedule_enabled": true,
        "fan_speed": 0.33,
        "mode": "auto_eco",
        "powered": false,
        "max_set_point": 21.11111111111111,
        "units": "f"
      },
      "device_manufacturer": "quirky_ge",
      "model_name": "Aros",
      "upc_id": "29",
      "last_reading": {
        "connection": true,
        "connection_updated_at": 1436734880.1749008,
        "schedule_enabled": true,
        "schedule_enabled_updated_at": 1436734649.9696357,
        "consumption": 6997,
        "consumption_updated_at": 1436734732.2930954,
        "cost": 0.019162,
        "cost_updated_at": 1436734732.2930954,
        "budget_percentage": 0,
        "budget_percentage_updated_at": 1436649290.7216883,
        "budget_velocity": 0,
        "budget_velocity_updated_at": 1436649290.7216883,
        "fan_speed": 0.33,
        "fan_speed_updated_at": 1436733213.2894034,
        "mode": "auto_eco",
        "mode_updated_at": 1436725928.9779797,
        "powered": false,
        "powered_updated_at": 1436734651.16933,
        "max_set_point": 21.11111111111111,
        "max_set_point_updated_at": 1436721231.141779,
        "temperature": 20.555555555555557,
        "temperature_updated_at": 1436734880.1748905,
        "external_temperature": 31.22,
        "external_temperature_updated_at": 1436733790.1235921,
        "users_away": null,
        "users_away_updated_at": null,
        "units": "f",
        "units_updated_at": 1436649247.521465,
        "desired_schedule_enabled_updated_at": 1436734769.2650433,
        "desired_fan_speed_updated_at": 1436734766.5430348,
        "desired_mode_updated_at": 1436734766.543056,
        "desired_powered_updated_at": 1436734651.1843462,
        "desired_max_set_point_updated_at": 1436734766.543064,
        "desired_units_updated_at": 1436734766.5430713,
        "connection_changed_at": 1436649234.382668,
        "schedule_enabled_changed_at": 1436649232.4909337,
        "consumption_changed_at": 1436734732.2930954,
        "budget_percentage_changed_at": 1436649290.7216883,
        "budget_velocity_changed_at": 1436649290.7216883,
        "fan_speed_changed_at": 1436733213.2894034,
        "mode_changed_at": 1436721227.1849446,
        "powered_changed_at": 1436729082.1845355,
        "max_set_point_changed_at": 1436721231.141779,
        "temperature_changed_at": 1436734880.1748905,
        "external_temperature_changed_at": 1436733790.1235921,
        "units_changed_at": 1436649247.521465,
        "desired_schedule_enabled_changed_at": 1436734649.9858997,
        "desired_fan_speed_changed_at": 1436734766.5430348,
        "desired_mode_changed_at": 1436734766.543056,
        "desired_powered_changed_at": 1436734651.1843462,
        "desired_max_set_point_changed_at": 1436734766.543064,
        "desired_units_changed_at": 1436734766.5430713
      },
      "current_budget": {
        "budget_id": "14289",
        "name": "Aros Smart Budget",
        "from_time": 1435723200,
        "until_time": 1438401600,
        "budgetable_reading": "cost",
        "threshold": 36.26,
        "edge": "rising",
        "projected_over_budget": false,
        "projected_value": 26.27395214223904,
        "created_at": 1436649290
      },
      "lat_lng": [
        42.379264,
        -71.101174
      ],
      "location": "02143",
      "mac_address": "0c2a6907b4bc",
      "serial": "AEAA00039968",
      "electric_rate": 0.134,
      "smart_schedule_enabled": false
    }
  ],
  "errors": [],
  "pagination": {
    "count": 2
  },
  "subscription": {
    "pubnub": {
      "subscribe_key": "sub-c-f7bf7f7e-0542-11e3-a5e8-02ee2ddab7fe",
      "channel": "ed2012c6bcff4fec812c00cd117a965ab9019e3e"
    }
  }
};

var acID = 27273;
var acType = "air_conditioners";