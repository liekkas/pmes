/**
 * Created by liekkas on 15/9/25.
 */
var APP_NAME = 'app'; //应用名称
var requires = [    //依赖关系
    'ionic',
    'templates',
    'ngCordova',
    'jett.ionic.filter.bar',
    'angular-amap',
    'monospaced.elastic',
    'chart.js'
];

angular.module(APP_NAME,requires);
