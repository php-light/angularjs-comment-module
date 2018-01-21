/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 21/01/2018
 * Time: 21:52
 */

'use strict';

phpLightCommentModule.directive('listCommentDirective', ['$rootScope', '$parse', 'phpLightCommentFactory',
    function ($rootScope, $parse, phpLightCommentFactory) {
    return {
        restrict: 'EA',
        templateUrl: function () {
            if ($rootScope.phpLight && $rootScope.phpLight.comment && $rootScope.phpLight.comment.listTemplate) {
                return $rootScope.phpLight.comment.listTemplate;
            }

            return '/web/vendor/php-light-comment/template/list.html'
        },
        scope: {
            identifier: '@identifier'
        },
        link: function (scope, element, attributes) {
            scope.$watch('identifier', function (identifier) {
                if (!identifier) return;

                phpLightCommentFactory.findBy({parent: attributes.parent, identifier: identifier})
                    .then(
                    function (response) {
                        scope.comments = response.comments;
                    },
                    function (error) {
                        console.error(error)
                    }
                );
            });
        }
    };
}]);
