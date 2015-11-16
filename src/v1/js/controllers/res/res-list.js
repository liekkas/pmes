/**
 * Created by liekkas on 15/11/16.
 */
(function (app) {
    'use strict';

    app.controller('ResListCtrl', ResListCtrl);

    /* @ngInject */
    function ResListCtrl($stateParams,$scope,$ionicFilterBar,ResService) {
        //视图模型ViewModel
        var vm = this;

        vm.title = $stateParams.typeId;
        var filterBarInstance;

        vm.items = [];

        var allItems = ResService.getNeByType(vm.title);
        var pIndex = 1;
        var pNums = 10;

        vm.items = _.take(allItems,pNums);

        vm.hasMoreData = allItems.length > vm.items.length;

        vm.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: allItems,
                cancelText: '取消',
                update: function (filteredItems, filterText) {
                    vm.items = _.take(filteredItems,pNums);
                    vm.hasMoreData = false;
                    if (filterText) {
                        console.log(filterText);
                    }
                },
                cancel: function () {
                    vm.hasMoreData = allItems.length > vm.items.length;
                }
            });
        };

        vm.loadMore = function() {
            var start = vm.items.length;
            var end = Math.min(allItems.length,start+pNums);
            var temp = _.slice(allItems,start,end);
            _.forEach(temp, function (item) {
                vm.items.push(item);
            });
            $scope.$broadcast('scroll.infiniteScrollComplete');
            vm.hasMoreData = allItems.length > vm.items.length;
        };

    }

})(angular.module(APP_NAME));
