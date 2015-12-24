/**
 * Created by liekkas on 15/11/17.
 */
(function (app) {
    'use strict';

    app.controller('ResDetailCtrl', ResDetailCtrl);

    /* @ngInject */
    function ResDetailCtrl($stateParams) {
        //视图模型ViewModel
        var vm = this;

        vm.title = $stateParams.objectId;

        var longitude = 87.597443;
        var latitude = 43.786771;
        vm.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            markers: [
                {
                    longitude: longitude,
                    latitude: latitude,
                    icon: 'assets/images/building0.png',
                    title: vm.title,
                    content: '<h3>厂商: &nbsp;&nbsp;华为</h3>'+
                    '<h3>状态: &nbsp;&nbsp;在网</h3>'
                }
            ]
        };
    }

})(angular.module(APP_NAME));
