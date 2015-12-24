/**
 * Created by liekkas on 15/11/11.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function PerfCtrl($scope,$timeout,$interval,$ionicPopover,areas,Constants) {
        //视图模型ViewModel
        var vm = this;

        vm.title = Constants.PROVINCE;
        vm.showBackBtn = false;
        vm.showAreaBtn = true;

        $scope.areas = areas[vm.title].subAreas;

        $ionicPopover.fromTemplateUrl('area-list.html',{
            scope: $scope
        }).then(function (popover) {
            vm.popover = popover;
        });

        function getItems () {
            vm.series = ['严重告警', '重要告警'];
            vm.onClick = function (points, evt) {
                console.log(points, evt);
            };
            vm.labels = ["5.09", "5.10", "5.11", "5.12", "5.13", "5.14", "5.15"];

            trend();
            //vm.data = [[65, 59, 80, 81, 56, 55, 40],
            //    [28, 48, 40, 19, 86, 27, 90]];
            /*var now = new Date().getSeconds();
             $interval(function () {
             vm.labels = ["5.09", "5.10", "5.11", "5.12", "5.13", "5.14", "5.15"];
             vm.labels = [];
             for (var k=7;k>0;k--){
             vm.labels.push(now-k);
             }

             now = now+5 > 59 ? (now+5-59) : now+5;

             for(var i=0;i<2;i++){
             var temp = [];
             for(var j=0;j<7;j++){
             temp[j] = Math.ceil(Math.random()*10);
             }
             vm.data[i] = temp;
             }

             },5000);*/

            vm.barLabels = ["阿克陶","塔县","巴里坤","莎车","托克逊","奇台","沙雅","和静","乌恰","麦盖提"];
            vm.barData = [[76,67,65,60,54,50,48,42,39,32]];
        }

        function trend(){
            vm.data = [];
            for(var i=0;i<2;i++) {
                var temp = [];
                for (var j = 0; j < 7; j++) {
                    temp[j] = Math.ceil(Math.random() * 100);
                }
                vm.data[i] = temp;
            }
        }

        getItems();

        $scope.areaChanged = function (area) {
            console.log(area);
            vm.popover.hide();

            if(vm.title !== area){
                vm.title = area;
                $scope.areas = areas[vm.title].subAreas;
            }

            vm.showAreaBtn = !_.isEmpty(areas[vm.title].subAreas);
            vm.showBackBtn = vm.title != Constants.PROVINCE;

            getItems();
        };

        vm.back = function () {
            if(vm.title === Constants.PROVINCE) return;

            vm.title = areas[vm.title].parentAreas[0];
            $scope.areas = areas[vm.title].subAreas;

            vm.showAreaBtn = !_.isEmpty(areas[vm.title].subAreas);
            vm.showBackBtn = vm.title != Constants.PROVINCE;

            getItems();
        };

        vm.refreshItems = function () {

            $timeout(function () {
                getItems();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

    }

    app.controller('PerfCtrl', PerfCtrl);

})(angular.module(APP_NAME));
