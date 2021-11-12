var pivot = new Flexmonster({
  container: "#pivot-container",
  componentFolder: "https://cdn.flexmonster.com/",
  licenseFilePath: "https://cdn.flexmonster.com/codepen.key",
  width: "100%",
  height: 640,
  toolbar: true,
  report: {
    "dataSource": {
      "data": getJSONData()
    },
    "slice": {
      "reportFilters": [{
        "uniqueName": "Duration"
      }, {
        "uniqueName": "Country"
      }],
      "rows": [{
        "uniqueName": "Order Date",
        "filter": {
          "query": {
            "after": "2018-01-01"
          }
        }
      }],
      "columns": [{
          "uniqueName": "Category"
        },
        {
          "uniqueName": "[Measures]"
        }
      ],
      "measures": [{
        "uniqueName": "Price",
        "aggregation": "sum",
        "format": "-495y308163r00"
      }]
    }, 
    conditions: [{
            formula: "#value < 500",
            measure: "Price",
            format: {
                backgroundColor: "#df3800",
                color: "#FFFFFF"
            },
            isTotal: false
        }, {
            formula: "#value > 10000",
            measure: "Price",
            format: {
                backgroundColor: "#00A45A",
                color: "#FFFFFF"
            },
            isTotal: false
        }],
        "formats": [
        {
            "name": "-495y308163r00",
            "currencySymbol": "$"
        }
    ]
  }
});

function setBetweenFiltering() {
    flexmonster.setFilter("Order Date", {
        "query": {
            "between": [
                "2018-12-08",
                "2019-02-08"
            ]
        }
    });
}

function setBeforeFiltering() {
    flexmonster.setFilter("Order Date", {
        "query": {
            "before": "2018-10-08"
        }
    });
}

function setAfterFiltering() {
    flexmonster.setFilter("Order Date", {
        "query": {
            "after": "2018-10-08"
        }
    });
}



function setLastYearFiltering() {
    flexmonster.setFilter("Order Date", {
        "query": {
            "last": "year"
        }
    });
}
function setLastQuarterFiltering() {
    flexmonster.setFilter("Order Date", {
        "query": {
            "last": "quarter"
        }
    });
}

function setCurrentYearFiltering() {
    flexmonster.setFilter("Order Date", {
        "query": {
            "current": "year"
        }
    });
}


function getJSONData() {
return [{
    "Price": {
      type: "number"
    },
    "Quantity": {
      type: "number"
    },
    "Discount": {
      type: "number"
    },
    "Category": {
      type: "string"
    },
    "Business Type": {
      type: "string"
    },
    "Size": {
      type: "string"
    },
    "Date": {
      type: "year/month/day"
    },
    "DateTime": {
      type: "datetime"
    },
    "Order Date": {
      type: "date string"
    },
    "Country": {
      type: "string"
    },
    "Destination": {
      type: "string"
    },
    "Duration": {
      type: "time"
    }
  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 174,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-05-28T10:43:10+00:00",
    "Discount": 23,
      "Duration": 829

  }, {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 857,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-12-19T10:43:10+00:00",
    "Discount": 23,
      "Duration": 424

  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 740,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2019-02-08T10:43:10+00:00",
    "Discount": 23,
    
    "Duration": 782

  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 988,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2019-02-15T10:43:10+00:00",
    "Discount": 23,

    "Duration": 475
  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 1255,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-04-18T10:43:10+00:00",
    "Discount": 23,
      "Duration": 997

  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 3500,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-05-19T10:43:10+00:00",
    "Discount": 23,
      "Duration": 644

  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 1330,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-05-28T10:43:10+00:00",
    "Discount": 23,
      "Duration": 243

  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 970,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-06-10T10:43:10+00:00",
    "Discount": 23,
      "Duration": 576

  },{
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 877,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-06-20T10:43:10+00:00",
    "Discount": 23,
      "Duration": 411

  },
  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 940,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-11-23T10:43:10+00:00",
    "Discount": 23,
      "Duration": 422

  },  {
    "Category": "Accessories",
    "Size": "262 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 557,
    "Quantity": 45,
    "Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2019-01-03T10:43:10+00:00",
    "Discount": 23,
      "Duration": 754

  },
  {
    "Category": "Accessories",
    "Size": "147 oz",
    "Color": "white",
    "Destination": "France",
    "Business Type": "Specialty Bike Shop",
    "Country": "France",
    "Price": 242,
    "Quantity": 50, "Date": "2018-08-23T05:58:56+00:00",
      "DateTime": "2016-03-06T23:45:26+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Discount": 37,
      "Duration": 554
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 6829,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Quantity": 20,
      "Duration": 757,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 4221,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2018-05-28T00:15:47+00:00",
    "Quantity": 20,
      "Duration": 787,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 3041,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2018-06-10T00:15:47+00:00",
    "Quantity": 20,"Duration": 711,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 789,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2018-06-20T00:15:47+00:00",
    "Quantity": 20,"Duration": 633,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 789,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2018-06-20T00:15:47+00:00",
    "Quantity": 20,"Duration": 577,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 789,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2018-06-20T00:15:47+00:00",
    "Quantity": 20,"Duration": 841,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "264 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 997,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2018-11-24T00:15:47+00:00",
    "Quantity": 20,"Duration": 100,
    "Discount": 56
  },
  {
    "Category": "Bikes",
    "Size": "76 oz",
    "Color": "red",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada","Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1664,
    "Quantity": 20,"Duration": 2200,
    "Discount": 75
  },
  {
    "Category": "Bikes",
    "Size": "217 oz",
    "Color": "red",
    "Destination": "France",
    "Business Type": "Specialty Bike Shop",
    "Country": "France",  "Date": "2014-04-23T03:57:37+00:00",
      "DateTime": "2014-04-11T04:40:49+00:00",
      "Order Date": "2018-05-19T03:09:59+00:00",
    "Price": 2995,
    "Quantity": 50,"Duration": 310,
    "Discount": 88
  },
  {
    "Category": "Bikes",
    "Size": "251 oz",
    "Color": "green",
    "Destination": "Germany",
    "Business Type": "Specialty Bike Shop",
    "Country": "Germany",
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Price": 1487,
    "Quantity": 55,"Duration": 150,
    "Discount": 100
  },
  {
    "Category": "Bikes",
    "Size": "292 oz",
    "Color": "green",
    "Destination": "United Kingdom",
    "Business Type": "Specialty Bike Shop",
    "Country": "United Kingdom",
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Price": 9245,
    "Quantity": 50,
    "Discount": 29
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },{
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Quantity": 20,
    "Discount": 70
  },{
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Quantity": 25,
    "Discount": 70
  },{
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Quantity": 45,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 777,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2019-02-08T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 1025,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-04-18T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-12-19T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 988,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-12-19T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-12-19T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 865,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-12-19T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 250,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-06-10T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 988,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-06-20T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 440,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-24T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "218 oz",
    "Color": "yellow",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia",
    "Price": 887,
      "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2019-01-03T15:34:42+00:00",
    "Quantity": 50,
    "Discount": 70
  },
  {
    "Category": "Clothing",
    "Size": "216 oz",
    "Color": "blue",
    "Destination": "France",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada","Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 511,
     "Quantity": 15,
    "Discount": 20
  },
  {
    "Category": "Clothing",
    "Size": "284 oz",
    "Color": "blue",
    "Destination": "Germany",
    "Business Type": "Specialty Bike Shop",
    "Country": "France",
    "Price": 981,"Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-05-28T10:43:10+00:00",
    "Quantity": 55,
    "Discount": 36
  },
  {
    "Category": "Clothing",
    "Size": "325 oz",
    "Color": "blue",
    "Destination": "United Kingdom",
    "Business Type": "Specialty Bike Shop",
    "Country": "Germany",
    "Price": 3654, "Date": "2014-04-23T03:57:37+00:00",
      "DateTime": "2014-04-11T04:40:49+00:00",
      "Order Date": "2018-05-19T03:09:59+00:00",
    "Quantity": 50,
    "Discount": 10
  },
  {
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 827,
    "Quantity": 55,
    "Discount": 26
  },
  {
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 827,
    "Quantity": 15,
    "Discount": 26
  },
  {
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 827,
    "Quantity": 20,
    "Discount": 26
  },{
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 827,
    "Quantity": 25,
    "Discount": 26
  },{
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 827,
    "Quantity": 45,
    "Discount": 26
  },{
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 827,
    "Quantity": 50,
    "Discount": 26
  },
  {
    "Category": "Components",
    "Size": "144 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada", "Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
      "Order Date": "2018-06-10T01:56:45+00:00",
    "Price": 722,
    "Quantity": 55,
    "Discount": 26
  },
  {
    "Category": "Components",
    "Size": "283 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "France", "Date": "2018-12-14T17:21:46+00:00",
      "DateTime": "2018-04-13T09:08:14+00:00",
      "Order Date": "2019-01-03T18:31:56+00:00",
    "Price": 967,
    "Quantity": 55,
    "Discount": 42
  },
  {
    "Category": "Components",
    "Size": "283 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "France", "Date": "2018-12-14T17:21:46+00:00",
      "DateTime": "2018-04-13T09:08:14+00:00",
      "Order Date": "2019-02-08T18:31:56+00:00",
    "Price": 967,
    "Quantity": 55,
    "Discount": 42
  },
  {
    "Category": "Components",
    "Size": "283 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "France", "Date": "2018-12-14T17:21:46+00:00",
      "DateTime": "2018-04-13T09:08:14+00:00",
      "Order Date": "2019-02-08T18:31:56+00:00",
    "Price": 967,
    "Quantity": 55,
    "Discount": 42
  },
  {
    "Category": "Components",
    "Size": "283 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "France", "Date": "2018-12-14T17:21:46+00:00",
      "DateTime": "2018-04-13T09:08:14+00:00",
      "Order Date": "2018-04-18T18:31:56+00:00",
    "Price": 967,
    "Quantity": 55,
    "Discount": 42
  },
  {
    "Category": "Components",
    "Size": "299 oz",
    "Color": "blue",
    "Destination": "United Kingdom",
    "Business Type": "Specialty Bike Shop",
    "Country": "Germany", "Date": "2018-10-05T05:30:49+00:00",
      "DateTime": "2014-07-09T05:01:29+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 569,
    "Quantity": 55,
    "Discount": 58
  },
  {
    "Category": "Components",
    "Size": "88 oz",
    "Color": "blue",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "United Kingdom", "Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Price": 156,
    "Quantity": 55,
    "Discount": 35
  },
  {
    "Category": "Components",
    "Size": "161 oz",
    "Color": "red",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "United States", "Date": "2014-04-23T03:57:37+00:00",
      "DateTime": "2014-04-11T04:40:49+00:00",
      "Order Date": "2018-05-19T03:09:59+00:00",
    "Price": 845,
    "Quantity": 55,
    "Discount": 42
  },
  {
    "Category": "Components",
    "Size": "242 oz",
    "Color": "blue",
    "Destination": "Canada",
    "Business Type": "Value Added Reseller",
    "Country": "Australia",
    "Price": 838,"Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
   "Quantity": 55,
    "Discount": 41
  },
  {
    "Category": "Components",
    "Size": "25 oz",
    "Color": "red",
    "Destination": "France",
    "Business Type": "Value Added Reseller",
    "Country": "Canada","Date": "2017-09-11T12:46:19+00:00",
      "DateTime": "2015-03-17T13:55:31+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 51,
    "Quantity": 55,
    "Discount": 97
  },
  {
    "Category": "Components",
    "Size": "317 oz",
    "Color": "blue",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "France",
    "Price": 650, "Date": "2017-11-30T10:28:38+00:00",
      "DateTime": "2014-08-07T21:19:31+00:00",
      "Order Date": "2018-06-20T19:20:11+00:00",
    "Quantity": 20,
    "Discount": 64
  },
  {
    "Category": "Components",
    "Size": "295 oz",
    "Color": "red",
    "Destination": "France",
    "Business Type": "Value Added Reseller",
    "Country": "Germany", "Date": "2017-03-02T17:19:02+00:00",
      "DateTime": "2017-07-14T20:45:55+00:00",
      "Order Date": "2018-06-10T07:41:13+00:00",
    "Price": 885,
    "Quantity": 55,
    "Discount": 10
  },
  {
    "Category": "Components",
    "Size": "69 oz",
    "Color": "blue",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "United Kingdom","Date": "2015-06-12T16:57:56+00:00",
      "DateTime": "2018-11-12T05:01:41+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 239,
    "Quantity": 55,
    "Discount": 36
  },
  {
    "Category": "Components",
    "Size": "320 oz",
    "Color": "blue",
    "Destination": "United Kingdom",
    "Business Type": "Value Added Reseller",
    "Country": "United States",
    "Price": 145, "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Quantity": 55,
    "Discount": 78
  },
  {
    "Category": "Components",
    "Size": "124 oz",
    "Color": "green",
    "Destination": "United Kingdom",
    "Business Type": "Warehouse",
    "Country": "Australia","Date": "2017-04-16T01:58:42+00:00",
      "DateTime": "2014-07-31T09:10:03+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 534,
    "Quantity": 55,
    "Discount": 90
  },
  {
    "Category": "Components",
    "Size": "48 oz",
    "Color": "white",
    "Destination": "United States",
    "Business Type": "Warehouse",
    "Country": "Canada","Date": "2017-07-05T02:57:39+00:00",
      "DateTime": "2015-12-05T20:28:25+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 716,
    "Quantity": 55,
    "Discount": 89
  },
  {
    "Category": "Components",
    "Size": "206 oz",
    "Color": "green",
    "Destination": "Australia",
    "Business Type": "Warehouse",
    "Country": "Australia", "Date": "2019-01-08T22:02:31+00:00",
      "DateTime": "2018-12-10T14:33:25+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 693,
    "Quantity": 55,
    "Discount": 91
  },
  {
    "Category": "Components",
    "Size": "78 oz",
    "Color": "white",
    "Destination": "Canada",
    "Business Type": "Warehouse",
    "Country": "Canada", "Date": "2018-08-23T05:58:56+00:00",
      "DateTime": "2016-03-06T23:45:26+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 753,
    "Quantity": 55,
    "Discount": 62
  },
  {
    "Category": "Components",
    "Size": "350 oz",
    "Color": "white",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France","Date": "2015-09-06T20:23:13+00:00",
      "DateTime": "2018-07-30T17:30:32+00:00",
      "Order Date": "2018-05-28T10:43:10+00:00",
    "Price": 356,
    "Quantity": 55,
    "Discount": 2
  },
  {
    "Category": "Components",
    "Size": "52 oz",
    "Color": "blue",
    "Destination": "Germany",
    "Business Type": "Warehouse",
    "Country": "Germany","Date": "2017-11-22T19:44:56+00:00",
      "DateTime": "2017-06-29T05:36:10+00:00",
      "Order Date": "2018-11-24T10:12:16+00:00",
    "Price": 124,
    "Quantity": 55,
    "Discount": 36
  },
  {
    "Category": "Components",
    "Size": "27 oz",
    "Color": "blue",
    "Destination": "United States",
    "Business Type": "Value Added Reseller",
    "Country": "United States",
    "Price": 493,"Date": "2017-11-22T19:44:56+00:00",
      "DateTime": "2017-06-29T05:36:10+00:00",
      "Order Date": "2018-11-24T10:12:16+00:00",
    "Quantity": 55,
    "Discount": 4
  },
  {
    "Category": "Components",
    "Size": "75 oz",
    "Color": "white",
    "Destination": "Canada",
    "Business Type": "Warehouse",
    "Country": "Canada",
    "Price": 332,
    "Quantity": 55,"Date": "2017-11-22T19:44:56+00:00",
      "DateTime": "2017-06-29T05:36:10+00:00",
      "Order Date": "2018-11-24T10:12:16+00:00",
    "Discount": 9
  },
  {
    "Category": "Components",
    "Size": "155 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2017-11-22T19:44:56+00:00",
      "DateTime": "2017-06-29T05:36:10+00:00",
      "Order Date": "2018-11-24T10:12:16+00:00",
    "Price": 152,
    "Quantity": 55,
    "Discount": 98
  },
  {
    "Category": "Components",
    "Size": "29 oz",
    "Color": "blue",
    "Destination": "United Kingdom",
    "Business Type": "Value Added Reseller",
    "Country": "United Kingdom",
    "Price": 666,
    "Quantity": 55, "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Discount": 89
  },
  {
    "Category": "Accessories",
    "Size": "321 oz",
    "Color": "green",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France", "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1654,
    "Quantity": 50,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "321 oz",
    "Color": "green",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France", "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1654,
    "Quantity": 15,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "321 oz",
    "Color": "green",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France", "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1654,
    "Quantity": 20,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "321 oz",
    "Color": "green",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France", "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1654,
    "Quantity": 25,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "321 oz",
    "Color": "green",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France", "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1654,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "321 oz",
    "Color": "green",
    "Destination": "France",
    "Business Type": "Warehouse",
    "Country": "France", "Date": "2014-05-23T14:34:50+00:00",
      "DateTime": "2015-03-07T17:57:31+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 1654,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "142 oz",
    "Color": "yellow",
    "Destination": "Germany",
    "Business Type": "Warehouse",
    "Country": "Germany", "Date": "2017-07-05T02:57:39+00:00",
      "DateTime": "2015-12-05T20:28:25+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 1190,
    "Quantity": 50,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "344 oz",
    "Color": "red",
    "Destination": "United Kingdom",
    "Business Type": "Warehouse",
    "Country": "United Kingdom","Date": "2017-03-02T17:19:02+00:00",
      "DateTime": "2017-07-14T20:45:55+00:00",
      "Order Date": "2018-06-10T07:41:13+00:00",
    "Price": 1222,
    "Quantity": 50,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "29 oz",
    "Color": "white",
    "Destination": "United States",
    "Business Type": "Warehouse", "Date": "2016-10-22T13:57:02+00:00",
      "DateTime": "2015-12-02T04:15:17+00:00",
      "Order Date": "2018-06-10T07:41:13+00:00",
    "Country": "United States",
    "Price": 7941,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "283 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia","Date": "2017-02-07T12:40:29+00:00",
      "DateTime": "2017-11-05T09:31:21+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 6152,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "283 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia","Date": "2017-02-07T12:40:29+00:00",
      "DateTime": "2017-11-05T09:31:21+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 6152,
    "Quantity": 15,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "283 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia","Date": "2017-02-07T12:40:29+00:00",
      "DateTime": "2017-11-05T09:31:21+00:00",
      "Order Date": "2019-02-15T00:15:47+00:00",
    "Price": 6152,
    "Quantity": 45,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "283 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia","Date": "2017-02-07T12:40:29+00:00",
      "DateTime": "2017-11-05T09:31:21+00:00",
      "Order Date": "2018-11-25T00:15:47+00:00",
    "Price": 3200,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Clothing",
    "Size": "283 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia","Date": "2017-02-07T12:40:29+00:00",
      "DateTime": "2017-11-05T09:31:21+00:00",
      "Order Date": "2018-11-25T00:15:47+00:00",
    "Price": 4500,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Components",
    "Size": "283 oz",
    "Color": "white",
    "Destination": "Australia",
    "Business Type": "Specialty Bike Shop",
    "Country": "Australia","Date": "2017-02-07T12:40:29+00:00",
      "DateTime": "2017-11-05T09:31:21+00:00",
      "Order Date": "2018-11-25T00:15:47+00:00",
    "Price": 2200,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "81 oz",
    "Color": "red",
    "Destination": "Canada",
    "Business Type": "Specialty Bike Shop",
    "Country": "Canada","Date": "2017-07-09T13:39:23+00:00",
      "DateTime": "2016-05-09T02:14:36+00:00",
      "Order Date": "2018-04-18T04:43:30+00:00",
    "Price": 7623,
    "Quantity": 20,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "219 oz",
    "Color": "red",
    "Destination": "France",
    "Business Type": "Specialty Bike Shop",
    "Country": "France","Date": "2015-06-26T04:12:42+00:00",
      "DateTime": "2018-03-28T06:25:54+00:00",
      "Order Date": "2019-02-08T11:16:58+00:00",
    "Price": 3971,
    "Quantity": 20,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "238 oz",
    "Color": "green",
    "Destination": "Germany",
    "Business Type": "Specialty Bike Shop",
    "Country": "Germany", "Date": "2017-09-11T12:46:19+00:00",
      "DateTime": "2015-03-17T13:55:31+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 3591,
    "Quantity": 20,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "286 oz",
    "Color": "green",
    "Destination": "United Kingdom",
    "Business Type": "Specialty Bike Shop",
    "Country": "United Kingdom","Date": "2016-03-28T06:21:13+00:00",
      "DateTime": "2018-09-29T02:08:58+00:00",
     "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 2564,
    "Quantity": 15,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "333 oz",
    "Color": "green",
    "Destination": "United States",
    "Business Type": "Specialty Bike Shop",
    "Country": "United States", "Date": "2018-12-14T17:21:46+00:00",
      "DateTime": "2018-04-13T09:08:14+00:00",
      "Order Date": "2019-01-03T18:31:56+00:00",
    "Price": 5165,
    "Quantity": 20,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "242 oz",
    "Color": "green",
    "Destination": "Australia",
    "Business Type": "Value Added Reseller",
    "Country": "Australia","Date": "2016-12-11T05:03:28+00:00",
      "DateTime": "2015-04-17T02:56:57+00:00",
      "Order Date": "2018-11-23T15:34:42+00:00",
    "Price": 2344,
    "Quantity": 50,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "67 oz",
    "Color": "red",
    "Destination": "Canada",
    "Business Type": "Value Added Reseller",
    "Country": "Canada","Date": "2014-04-23T03:57:37+00:00",
      "DateTime": "2014-04-11T04:40:49+00:00",
      "Order Date": "2018-05-19T03:09:59+00:00",
    "Price": 3864,
    "Quantity": 20,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "40 oz",
    "Color": "yellow",
    "Destination": "France",
    "Business Type": "Value Added Reseller",
    "Country": "France","Date": "2018-05-05T06:47:38+00:00",
      "DateTime": "2014-01-16T16:18:13+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 9845,
    "Quantity": 25,
    "Discount": ""
  },
  {
    "Category": "Bikes",
    "Size": "201 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2018-09-11T22:10:05+00:00",
      "DateTime": "2014-01-19T21:08:55+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 4822,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "201 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2018-09-11T22:10:05+00:00",
      "DateTime": "2014-01-19T21:08:55+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 2330,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "201 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2018-09-11T22:10:05+00:00",
      "DateTime": "2014-01-19T21:08:55+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 2330,
    "Quantity": 25,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "201 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2018-09-11T22:10:05+00:00",
      "DateTime": "2014-01-19T21:08:55+00:00",
      "Order Date": "2018-11-24T21:43:16+00:00",
    "Price": 3660,
    "Quantity": 55,
    "Discount": ""
  },
   {
    "Category": "Accessories",
    "Size": "201 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2018-09-11T22:10:05+00:00",
      "DateTime": "2014-01-19T21:08:55+00:00",
      "Order Date": "2018-11-24T23:43:16+00:00",
    "Price": 2330,
    "Quantity": 55,
    "Discount": ""
  },
  {
    "Category": "Accessories",
    "Size": "201 oz",
    "Color": "red",
    "Destination": "Germany",
    "Business Type": "Value Added Reseller",
    "Country": "Germany","Date": "2018-09-11T22:10:05+00:00",
      "DateTime": "2014-01-19T21:08:55+00:00",
      "Order Date": "2018-12-18T23:43:16+00:00",
    "Price": 2330,
    "Quantity": 55,
    "Discount": ""
  }
]
}