/**
 * Created by liekkas on 15/10/16.
 */

(function (app) {
    'use strict';

    /* @ngInject */
    function TabCtrl(EventBus,$scope) {
        //视图模型ViewModel
        var vm = this;

        vm.badges = 0;
        EventBus.onMsg('alarmStatsChanged', function (data,result) {
            vm.badges = result;
        });
    }

    app.controller('TabCtrl', TabCtrl);

})(angular.module(APP_NAME));
