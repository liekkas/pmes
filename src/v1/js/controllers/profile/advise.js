/**
 * Created by liekkas on 15/11/18.
 */
(function (app) {
    'use strict';

    app.controller('AdviseCtrl', AdviseCtrl);

    /* @ngInject */
    function AdviseCtrl($cordovaToast) {
        //视图模型ViewModel
        var vm = this;
        vm.txt = "";

        vm.submit = function () {
            vm.txt = "";
            $cordovaToast.showShortCenter("感谢反馈,我们会尽快处理!");
        }
    }

})(angular.module(APP_NAME));
