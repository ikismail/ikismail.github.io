/**
 * Created by mohamed-3976 on 5/28/2017.
 */
var chart = AmCharts.makeChart("chartdiv",
    {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
            "name": "Java",
            "points": 70,
            "color": "#e76f00",
            "bullet": "http://i.imgur.com/xxT7Dj2.png"
        }, {
            "name": "Spring , Jersey",
            "points": 65,
            "color": "#6bb344",
            "bullet": "http://i.imgur.com/4jUEVrp.png"
        },
            {
                "name": "REST",
                "points": 75,
                "color": "#5c6f8b",
                "bullet": "http://i.imgur.com/5zxE6XW.png"
            }, {
                "name": "AngularJS",
                "points": 60,
                "color": "#b82933",
                "bullet": "http://i.imgur.com/2jbTh5K.png"
            }, {
                "name": "HTML + CSS",
                "points": 90,
                "color": "#e44d26",
                "bullet": "http://i.imgur.com/3RtSmm1.png"
            }],
        "valueAxes": [{
            "maximum": 100,
            "minimum": 0,
            "axisAlpha": 0,
            "dashLength": 1,
            "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]] %</b></span>",
            "bulletOffset": 10,
            "bulletSize": 100,
            "colorField": "color",
            "cornerRadiusTop": 8,
            "customBulletField": "bullet",
            "fillAlphas": 0.8,
            "lineAlpha": 0,
            "type": "column",
            "valueField": "points"
        }],
        "marginTop": 20,
        "marginRight": 20,
        "marginLeft": 0,
        "marginBottom": 0,
        "autoMargins": true,
        "categoryField": "name",
        "categoryAxis": {
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "tickLength": 0
        },
        "export": {
            "enabled": false
        }
    });
