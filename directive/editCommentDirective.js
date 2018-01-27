/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 26/01/2018
 * Time: 23:37
 */

'use strict';

phpLightCommentModule.directive('phpLightCommentEdit', ['$rootScope', 'phpLightCommentFactory',
    function ($rootScope, phpLightCommentFactory) {
        return {
            restrict: 'EA',
            templateUrl: function () {
                if ($rootScope.phpLight && $rootScope.phpLight.comment && $rootScope.phpLight.comment.editTemplate) {
                    return $rootScope.phpLight.comment.editTemplate;
                }

                return '/web/vendor/php-light-comment/template/edit.html'
            },
            scope: {
                identifier: '@identifier'
            },
            link: function (scope, element, attributes) {
                scope.submit = function (comment) {
                    // @todo trigger comments reload on success or add to existing comments
                    phpLightCommentFactory.edit({parent: attributes.parent, identifier: attributes.identifier, comment: comment})
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