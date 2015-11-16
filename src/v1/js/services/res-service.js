/**
 * Created by liekkas on 15/11/16.
 */
(function (app) {
    'use strict';

    app.service('ResService', ResService);

    /* @ngInject */
    function ResService() {
        var service = {};

        service.getNeByType = function (type) {
            var items = [];
            for(var i=0;i<26;i++){
                items.push({name:type+i});
            }
            return items;
        };

        return service;
    }

})(angular.module(APP_NAME));
