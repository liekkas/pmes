/**
 * Created by liekkas on 15/10/14.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function ProfileCtrl($state,$rootScope,Constants,Events,
                         UserService,$ionicHistory,$cordovaToast) {
        //视图模型ViewModel
        var vm = this;
        vm.user = UserService.getCurrentUser();

        $ionicHistory.clearHistory();

        $rootScope.$on(Events.USER_LOGINED, function(event,user) {
            $rootScope[Constants.CURRENT_USER] = user;
            console.log('>>> ProfileCtrl:收到用户登录');
            vm.user = user;
        });

        $rootScope.$on(Events.USER_LOGOUTED, function() {
            $rootScope[Constants.CURRENT_USER] = null;
            console.log('>>> ProfileCtrl:收到用户退出');
            vm.user = null;
        });


        vm.jump = function (state) {
            var result = vm.user === null ? 'login' : state;
            console.log('>>>明明有了a：'+vm.user+' state:'+result);

            $state.go(result);
        };

        vm.onLogout = function () {
            UserService.clearUser();
            $ionicHistory.clearHistory()
            $rootScope.$emit(Events.USER_LOGOUTED);
            $state.go('login');
            console.log('>>> SettingCtrl:用户退出');
        };

        vm.checkVersion = function () {
            $cordovaToast.showShortCenter("已是最新版本 v1.0");
        };

        console.log(vm.user);
    }

    app.controller('ProfileCtrl', ProfileCtrl);

})(angular.module(APP_NAME));
