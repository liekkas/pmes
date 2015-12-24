'use strict';

var nodeModulesPath = '/Users/liekkas/node_modules'; //node_modules存放路径
var bowerComponentsPath = '/Users/liekkas/bower_components'; //bower包路径
var jsComponentsPath = '/Users/liekkas/js-components'; //自己维护的包路径
var srcPath = 'src/v1'; //源码路径
var publicPath = 'www'; //发布输出路径

module.exports = {

  'publicPath' : publicPath,

  //-----------开发服务器设置-----------
  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  //-----------第三方框架引用----------
  'vendors': {
    'src': [
        {
            name: 'jquery',
            path: bowerComponentsPath+'/jquery/dist/*.min.js'
        },
        {
            name: 'lodash',
            path: bowerComponentsPath+'/lodash/*.min.js'
        },
        {
            name: 'ionic',
            path: bowerComponentsPath+'/ionic/release/**/*.*'
        },{
            name: 'ionic/scss',
            path: bowerComponentsPath+'/ionic/scss/**/*.*'
        },{
            name: 'chartjs',
            path: bowerComponentsPath+'/Chart.js/Chart.min.js'
        },{
            name: 'angular-chartjs',
            path: bowerComponentsPath+'/angular-chart.js/dist/*.*'
        },{
            name: 'ngCordova',
            path: bowerComponentsPath+'/ngCordova/dist/ng-cordova.min.js'
        },{
            name: 'md-sass',
            path: bowerComponentsPath+'/sass-material-colors/sass/*.scss'
        },{
            name: 'filter-bar',
            path: bowerComponentsPath+'/ionic-filter-bar/dist/*.min.*'
        },{
            name: 'amap',
            path: jsComponentsPath+'/angular-amap/*.min.js'
        },{
            name: 'angular-elastic',
            path: bowerComponentsPath+'/angular-elastic/*.js'
        }
      ],
    'devDest': srcPath + '/assets/vendors',  //复制到开发包下
    'pubDest': publicPath + '/assets/vendors'
  },

  //--------------sass样式编译--------------
  'styles': {
    'src' : srcPath + '/assets/scss/**/*.scss',
    'dest': publicPath+'/assets/css',
    'devDest' : srcPath+'/assets/css',   //编译时也同时输入到app下，便于开发使用快捷提示
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'scripts': {
    'src' : [srcPath+'/js/main.js',srcPath+'/js/**/*.js','!'+srcPath+'/js/app.js'],
    'devDest': srcPath+'/js',
    'pubDest': publicPath+'/js'
  },

  'images': {
    'src' : srcPath+'/assets/images/**/*',
    'dest': publicPath+'/assets/images'
  },

  'jsons': {
    'src' : srcPath+'/assets/jsons/**/*',
    'dest': publicPath+'/assets/jsons'
  },

  //--------------视图--------------
  'views': {
    'index': srcPath+'/index.html',
    'watch': [
      srcPath+'/index.html',
      srcPath+'/views/**/*.html'
    ],
    'src': srcPath+'/views/**/*.html',
    'dest': srcPath+'/js'
  },

  'gzip': {
    'src': publicPath+'/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': publicPath+'/',
    'options': {}
  }

};
