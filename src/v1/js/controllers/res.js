/**
 * Created by liekkas on 15/11/11.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function ResCtrl($scope,$timeout,$ionicPopover,areas,Constants,EventBus) {
        //视图模型ViewModel
        var vm = this;

        var neTypes = ['蓄电池组','UPS','交流配电屏','直流配电屏','普通空调','中央空调','发电机组','开关电源','路由器','交换机'];
        var neIcons = ['ion-battery-half','ion-soup-can-outline','ion-shuffle','ion-levels',
            'ion-arrow-shrink','ion-arrow-expand','ion-android-bulb','ion-toggle','ion-ios-analytics','ion-arrow-swap'];

        function getItems () {
            var items = [];
            for (var x = 0; x < neTypes.length; x++) {
                items.push(
                    {name:neTypes[x],value:Math.ceil(Math.random()*1000)+1,icon:neIcons[x]});
            }
            vm.items = items;
        }

        getItems();

        vm.title = Constants.PROVINCE;
        vm.showBackBtn = false;
        vm.showAreaBtn = true;

        $scope.areas = areas[vm.title].subAreas;

        $ionicPopover.fromTemplateUrl('area-list.html',{
            scope: $scope
        }).then(function (popover) {
            vm.popover = popover;
        });

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

    app.controller('ResCtrl', ResCtrl);

})(angular.module(APP_NAME));
