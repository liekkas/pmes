/**
 * Created by liekkas on 15/9/27.
 */
(function (app) {
    'use strict';

    app.run(onReady);
    app.run(stateChanged);
    app.run(loginChanged);

    /**
     * @ngInject
     */
    function onReady($ionicPlatform,$rootScope,Constants) {

        $ionicPlatform.ready(function() {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
          }
        });

        //默认是首页
        $rootScope[Constants.CURRENT_STATE] = 'tab.home';
    }

    /**
     * 动态跟踪应用状态
     */
    function stateChanged($rootScope,Constants,UserService,$state,$ionicHistory) {

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            $rootScope[Constants.PREVENT_STATE] = $rootScope[Constants.CURRENT_STATE];
            $rootScope[Constants.CURRENT_STATE] = toState;
            var stateName = $state.current.name;

            // 管理tab隐藏和显示，只有四个首页时显示，其他情况隐藏
            if (stateName === 'app.alarm' || stateName === 'app.perf'
                || stateName === 'app.res' || stateName === 'app.profile') {
                $rootScope.hideTabs = false;
            } else {
                $rootScope.hideTabs = true;
            }
        });

        $rootScope.$on('$ionicView.beforeEnter', function () {
            var stateName = $state.current.name;
            var user = UserService.getCurrentUser();

            // 处理登录、登出后历史导航的问题
            // 用户登录后，如果返回是登录界面则自动返回到个人首页，同时清除之前的缓存
            if(user !== null && stateName === 'login'){
                $ionicHistory.clearHistory()
                $state.go('app.alarm');
            }
            // 用户只能在设置界面登出，所以如果没有用户登录且要跳转到设置界面的时候就返回到登录界面。
            if(user === null && stateName === 'app.setting'){
                $ionicHistory.clearHistory()
                $state.go('login');
            }


        });
    }

    /**
     * 登入等出
     */
    function loginChanged($rootScope,Constants,Events) {

        $rootScope.$on(Events.USER_LOGINED, function(user) {
            $rootScope[Constants.CURRENT_USER] = user;
            console.log('>>> $rootScope:收到用户登录');

        });

        $rootScope.$on(Events.USER_LOGOUTED, function() {
            $rootScope[Constants.CURRENT_USER] = null;
            console.log('>>> $rootScope:收到用户退出');
        });
    }



})(angular.module(APP_NAME));
