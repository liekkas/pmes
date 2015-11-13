/**
 * Created by liekkas on 15/11/12.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function AlarmDetailCtrl($stateParams) {
        //视图模型ViewModel
        var vm = this;

        console.log($stateParams.alarmId);
    }

    app.controller('AlarmDetailCtrl', AlarmDetailCtrl);

})(angular.module(APP_NAME));

