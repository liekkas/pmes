/**
 * Created by liekkas on 15/11/12.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function ProblemsDetailCtrl($stateParams) {
        //视图模型ViewModel
        var vm = this;

        console.log($stateParams.alarmId);

        vm.problem = {
            告警ID: $stateParams.alarmId,
            告警标题: '蓄电池故障',
            告警级别: '严重告警',
            告警发生时间: '2015-05-15',
            告警对象ID: '23232323',
            告警对象名称: 'BTS007',
            告警对象类型: 'BTS',
            厂商: '华为',
            是否标志: '是',
            是否派单: '否',
            告警内容: '蓄电池完全放电'
        }

    }

    app.controller('ProblemsDetailCtrl', ProblemsDetailCtrl);

})(angular.module(APP_NAME));

