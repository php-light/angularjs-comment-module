/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 21/01/2018
 * Time: 21:41
 */

'use strict';

phpLightCommentModule.factory('phpLightCommentFactory', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
    var phpLightCommentFactory = {};

    phpLightCommentFactory.create = function (comment) {
        console.log(comment);
        var deferred = $q.defer();
    };

    phpLightCommentFactory.findBy = function (filter) {
        var deferred = $q.defer();
        var restEndpoint = '';

        if ($rootScope.restUrl) {
            restEndpoint = $rootScope.restUrl + '?route=comment_get&parent=' + filter.parent + "&id=" + filter.identifier
        } else {
            restEndpoint = '/app.php/?route=comment_get&parent=' + filter.parent + "&id=" + filter.identifier
        }

        $http.post(restEndpoint, {}).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
    };

    return phpLightCommentFactory;
}]);
