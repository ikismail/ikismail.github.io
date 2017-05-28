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
            "bullet": "http://vignette1.wikia.nocookie.net/egamia/images/6/63/Java_avatar.png/revision/latest?cb=20081111001200.png"
        }, {
            "name": "Spring , Jersey",
            "points": 65,
            "color": "#6bb344",
            "bullet": "http://www.unixstickers.com/image/cache/data/stickers/spring/xspring-leaf.sh-340x340.png.pagespeed.ic.K5PrZIokfE.png"
        },
            {
                "name": "REST",
                "points": 75,
                "color": "#5c6f8b",
                "bullet": "https://cdn1.iconfinder.com/data/icons/30-seo-web-development-flat-icons-part-1/218/API-512.png"
            }, {
                "name": "AngularJS",
                "points": 60,
                "color": "#b82933",
                "bullet": "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAqfAAAAJDQwZWJiNTdkLThiYjUtNGQ2YS1iMzJjLTRiMmQ5YjZiMDNiNw.png"
            }, {
                "name": "HTML + CSS",
                "points": 90,
                "color": "#e44d26",
                "bullet": "http://www.zenperfectdesign.com/img/ico/html-css.png"
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