/**
 * Created by mohamed-3976 on 5/28/2017.
 */
// var chart = AmCharts.makeChart("chartdiv",
//     {
//         "type": "serial",
//         "theme": "light",
//         "dataProvider": [
//         {
//             "name": "Java",
//             "points": 70,
//             "color": "#e76f00",
//             "bullet": "http://i.imgur.com/xxT7Dj2.png"
//         }, {
//             "name": "Spring , Jersey",
//             "points": 65,
//             "color": "#6bb344",
//             "bullet": "http://i.imgur.com/4jUEVrp.png"
//         }, {
//                 "name": "REST",
//                 "points": 75,
//                 "color": "#5c6f8b",
//                 "bullet": "http://i.imgur.com/5zxE6XW.png"
//          }, {
//                 "name": "AngularJS",
//                 "points": 60,
//                 "color": "#b82933",
//                 "bullet": "http://i.imgur.com/2jbTh5K.png"
//          }, {
//                 "name": "HTML + CSS",
//                 "points": 90,
//                 "color": "#e44d26",
//                 "bullet": "http://i.imgur.com/3RtSmm1.png"
//             }],
//         "valueAxes": [{
//             "maximum": 100,
//             "minimum": 0,
//             "axisAlpha": 0,
//             "dashLength": 1,
//             "position": "left"
//         }],
//         "startDuration": 1,
//         "graphs": [{
//             "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]] %</b></span>",
//             "bulletOffset": 10,
//             "bulletSize": 100,
//             "colorField": "color",
//             "cornerRadiusTop": 8,
//             "customBulletField": "bullet",
//             "fillAlphas": 0.8,
//             "lineAlpha": 0,
//             "type": "column",
//             "valueField": "points"
//         }],
//         "marginTop": 20,
//         "marginRight": 20,
//         "marginLeft": 0,
//         "marginBottom": 0,
//         "autoMargins": true,
//         "categoryField": "name",
//         "categoryAxis": {
//             "axisAlpha": 0,
//             "gridAlpha": 0,
//             "inside": true,
//             "tickLength": 0
//         },
//         "export": {
//             "enabled": false
//         }
//     // });

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