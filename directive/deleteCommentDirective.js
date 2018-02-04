/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 21/01/2018
 * Time: 21:52
 */

'use strict';

phpLightCommentModule.directive('phpLightCommentDelete',  ['$rootScope', '$parse', 'phpLightCommentFactory',
    function ($rootScope, $parse, phpLightCommentFactory) {
        return {
            restrict: 'EA',
            templateUrl: function () {
                if ($rootScope.phpLight && $rootScope.phpLight.comment && $rootScope.phpLight.comment.createTemplate) {
                    return $rootScope.phpLight.comment.createTemplate;
                }

                return '/web/vendor/php-light-comment/template/delete.html'
            },
            scope: {
                id: '@identifier'
            },
            link: function (scope) {
                scope.delete = function () {
                    // @todo trigger comments reload on success or remove comment from comments
                    phpLightCommentFactory.delete({id: scope.id})
                        .then(
                            function () {
                            },
                            function (error) {
                                console.error(error)
                            }
                        );
                }
            }
        };
    }]);
