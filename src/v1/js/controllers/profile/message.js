/**
 * Created by liekkas on 15/10/21.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function MessageCtrl() {
        //视图模型ViewModel
        var vm = this;

        vm.msgs = [
            {id:1,type:'logistics',letter:'物流',title:'停电通知',desc:'明天1点大厦停电1小时',time:'昨天 12:05'},
            {id:2,type:'activity',letter:'促销',title:'停水通知',desc:'明天2点大厦停水',time:'2015-10-15'},
            {id:3,type:'activity',letter:'促销',title:'检查通知',desc:'下周开始卫生检查',time:'2015-10-14'}
        ];

        vm.remove = function (id) {


        }
    }

    app.controller('MessageCtrl', MessageCtrl);

})(angular.module(APP_NAME));
