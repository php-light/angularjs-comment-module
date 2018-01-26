/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 21/01/2018
 * Time: 21:50
 */

'use strict';

phpLightCommentModule.directive('phpLightCommentCreate', ['$rootScope', '$parse', 'phpLightCommentFactory',
    function ($rootScope, $parse, phpLightCommentFactory) {
        return {
            restrict: 'EA',
            templateUrl: function () {
                if ($rootScope.phpLight && $rootScope.phpLight.comment && $rootScope.phpLight.comment.createTemplate) {
                    return $rootScope.phpLight.comment.createTemplate;
                }

                return '/web/vendor/php-light-comment/template/create.html'
            },
            scope: {
                identifier: '@identifier'
            },
            link: function (scope, element, attributes) {
                scope.create = function (comment) {
                    // @todo trigger comments reload on success or add to existing comments
                    phpLightCommentFactory.create({parent: attributes.parent, identifier: attributes.identifier, comment: comment})
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
