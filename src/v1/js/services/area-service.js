/**
 * Created by liekkas on 15/11/13.
 */
(function (app) {
    'use strict';

    app.service('AreaService', AreaService);

    /* @ngInject */
    function AreaService($http,$q,$rootScope,API) {
        var service = {};

        service.getAreas = function () {
            var deferred = $q.defer();
            $http.get(API.AREAS)
                .success(function (data) {
                    var areas = {};

                    _.forEach(data, function (item) {
                        areas[item.name] = {
                            subAreas: item.subAreas,
                            parentAreas: item.parentAreas,
                            longitude: item.longitude,
                            latitude: item.latitude
                        }
                    });

                    deferred.resolve(areas);
                }).error(function (error, status) {
                deferred.reject(error,status);
            });
            return deferred.promise;
        };

        return service;
    }

})(angular.module(APP_NAME));
