/**
 * Created by liekkas on 15/11/18.
 */
(function (app) {
    'use strict';

    app.controller('ProblemsCtrl', ProblemsCtrl);

    /* @ngInject */
    function ProblemsCtrl(EventBus) {
        //视图模型ViewModel
        var vm = this;

        vm.problems = [
            {title:'漏水',kind:'水',desc:'泰岳大厦04机房漏水',time:new Date().toLocaleDateString()},
            {title:'机房停电',kind:'电',desc:'泰岳大厦04机房停电',time:new Date().toLocaleDateString()}
        ];

        EventBus.onMsg('problemAdded', function (event, data) {
            console.log(data);
            vm.problems.push(data);
        });
    }

})(angular.module(APP_NAME));
