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

                return '/web/vendor/php-light-comment/template/form.html'
            },
            scope: {
                identifier: '@identifier'
            },
            link: function (scope, element, attributes) {
                scope.submit = function (comment) {
                    phpLightCommentFactory.create({parent: attributes.parent, identifier: attributes.identifier, comment: comment})
                        .then(
                            function (response) {
                                if (response.success) {
                                    $rootScope.$emit('phpLightCommentNew', response.comment);
                                } else {
                                    $rootScope.$emit('phpLightCommentNew', false);
                                }
                            },
                            function (error) {
                                console.error(error)
                            }
                        );
                }
            }
        };
}]);
