/**
 * Created by mohamed-3976 on 5/28/2017.
 */

var gaugeChart = AmCharts.makeChart("chartdiv", {
  "type": "gauge",
  "theme": "light",
  "axes": [{
    "axisAlpha": 0,
    "tickAlpha": 0,
    "labelsEnabled": false,
    "startValue": 0,
    "endValue": 100,
    "startAngle": 0,
    "endAngle": 270,
    "bands": [{
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "100%",
      "innerRadius": "85%"
    }, {
      "color": "#df3a40",
      "startValue": 0,
      "endValue": 80,
      "radius": "100%",
      "innerRadius": "85%",
      "balloonText": "80%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "80%",
      "innerRadius": "65%"
    }, {
      "color": "#292C44",
      "startValue": 0,
      "endValue": 70,
      "radius": "80%",
      "innerRadius": "65%",
      "balloonText": "70%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "60%",
      "innerRadius": "45%"
    }, {
      "color": "#18CDCA",
      "startValue": 0,
      "endValue": 75,
      "radius": "60%",
      "innerRadius": "45%",
      "balloonText": "75%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "40%",
      "innerRadius": "25%"
    }, {
      "color": "#044C29",
      "startValue": 0,
      "endValue": 68,
      "radius": "40%",
      "innerRadius": "25%",
      "balloonText": "68%"
    }]
  }],
  "allLabels": [{
    "text": "HTML & CSS",
    "x": "49%",
    "y": "5%",
    "size": 15,
    "bold": true,
    "color": "#df3a40",
    "align": "right"
  }, {
    "text": "Angular",
    "x": "49%",
    "y": "15%",
    "size": 15,
    "bold": true,
    "color": "#292C44",
    "align": "right"
  }, {
    "text": "REST API",
    "x": "49%",
    "y": "24%",
    "size": 15,
    "bold": true,
    "color": "#18CDCA",
    "align": "right"
  }, {
    "text": "JAVASCRIPT",
    "x": "49%",
    "y": "33%",
    "size": 15,
    "bold": true,
    "color": "#044C29",
    "align": "right"
  }],
  "export": {
    "enabled": false
  }
});