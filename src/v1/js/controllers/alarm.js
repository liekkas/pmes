/**
 * Created by liekkas on 15/11/11.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function AlarmCtrl($scope,$ionicPopover,areas,Constants,EventBus) {
        //视图模型ViewModel
        var vm = this;

        var levels = ['严重告警','重要告警','次要告警','警告告警'];
        var levelsEn = ['lv1','lv2','lv3','lv4'];

        vm.title = Constants.PROVINCE;
        vm.showBackBtn = false;
        vm.showAreaBtn = true;

        vm.alarmStats = {};
        vm.alarms = [];
        for(var i=0;i < 2;i++){
            vm.alarms.push({
                id:100+i,level:levels[0],letter:'严重',title:'蓄电池故障',desc:'蓄电池完全放电',time:'2015-05-15'
            })
        }

        for(var i=0;i < 1;i++){
            vm.alarms.push({
                id:200+i,level:levels[1],letter:'重要',title:'蓄电池故障',desc:'蓄电池完全放电',time:'2015-05-15'
            })
        }

        for(var i=0;i < 3;i++){
            vm.alarms.push({
                id:300+i,level:levels[2],letter:'次要',title:'蓄电池故障',desc:'蓄电池完全放电',time:'2015-05-15'
            })
        }

        for(var i=0;i < 4;i++){
            vm.alarms.push({
                id:400+i,level:levels[3],letter:'警告',title:'蓄电池故障',desc:'蓄电池完全放电',time:'2015-05-15'
            })
        }

        vm.getColor = function (level) {
            switch (level) {
                case levels[0]:
                    return '#d32f2f';
                case levels[1]:
                    return '#f57c00';
                case levels[2]:
                    return '#fbc02d';
                case levels[3]:
                    return '#1976d2';

            }
        };

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

            getAlarmStats(vm.title);
        };

        vm.back = function () {
            if(vm.title === Constants.PROVINCE) return;

            vm.title = areas[vm.title].parentAreas[0];
            $scope.areas = areas[vm.title].subAreas;

            vm.showAreaBtn = !_.isEmpty(areas[vm.title].subAreas);
            vm.showBackBtn = vm.title != Constants.PROVINCE;

            getAlarmStats(vm.title);
        };

        function getAlarmStats(area){
            _.forEach(levelsEn, function (level) {
                vm.alarmStats[level] = Math.floor(Math.random()*10);
                if(level === 'lv1'){
                    EventBus.emitMsg('alarmStatsChanged',vm.alarmStats[level]);
                }
            });
        }

        getAlarmStats(vm.title);
    }

    app.controller('AlarmCtrl', AlarmCtrl);

})(angular.module(APP_NAME));
