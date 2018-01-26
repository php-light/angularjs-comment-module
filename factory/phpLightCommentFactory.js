/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 21/01/2018
 * Time: 21:41
 */

'use strict';

phpLightCommentModule.factory('phpLightCommentFactory', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
    var phpLightCommentFactory = {};

    phpLightCommentFactory.create = function (data) {
        var deferred = $q.defer();
        var restEndpoint = '';

        if ($rootScope.restUrl) {
            restEndpoint = $rootScope.restUrl + '?route=comment_create&parent=' + data.parent + "&id=" + data.identifier
        } else {
            restEndpoint = '/app.php/?route=comment_create&parent=' + data.parent + "&id=" + data.identifier
        }

        $http.post(restEndpoint, {comment: data}).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
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

    phpLightCommentFactory.delete = function (comment) {
        var deferred = $q.defer();
        var restEndpoint = '';

        if ($rootScope.restUrl) {
            restEndpoint = $rootScope.restUrl + '?route=comment_delete';
        } else {
            restEndpoint = '/app.php/?route=comment_delete';
        }

        $http.post(restEndpoint, {commentId: comment.id}).then(
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
