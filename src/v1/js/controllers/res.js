/**
 * Created by liekkas on 15/11/11.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function ResCtrl($scope,$timeout,$ionicFilterBar) {
        //视图模型ViewModel
        var vm = this;

        var filterBarInstance;

        function getItems () {
            var items = [];
            for (var x = 1; x < 2000; x++) {
                items.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
            }
            vm.items = items;
        }

        getItems();

        vm.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: vm.items,
                cancelText: '取消',
                update: function (filteredItems, filterText) {
                    vm.items = filteredItems;
                    if (filterText) {
                        console.log(filterText);
                    }
                }
            });
        };

        vm.refreshItems = function () {
            if (filterBarInstance) {
                filterBarInstance();
                filterBarInstance = null;
            }

            $timeout(function () {
                getItems();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };
    }

    app.controller('ResCtrl', ResCtrl);

})(angular.module(APP_NAME));
