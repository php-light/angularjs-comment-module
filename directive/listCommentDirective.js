/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 21/01/2018
 * Time: 21:52
 */

'use strict';

phpLightCommentModule.directive('phpLightCommentList', ['$rootScope', 'phpLightCommentFactory',
    function ($rootScope, phpLightCommentFactory) {
    return {
        restrict: 'EA',
        templateUrl: function () {
            if ($rootScope.phpLight && $rootScope.phpLight.comment && $rootScope.phpLight.comment.listTemplate) {
                return $rootScope.phpLight.comment.listTemplate;
            }

            return '/web/vendor/php-light-comment/template/list.html'
        },
        scope: {
            identifier: '@identifier',
            canEdit: '@',
            currentUser: '@'
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

            $rootScope.$on('phpLightCommentNew', function (event, comment) {
                scope.comments.unshift(comment);
            });

            $rootScope.$on('phpLightCommentDeleted', function (event, deletedCommentId) {
                angular.forEach(scope.comments, function (comment, index) {
                    if (comment.id === deletedCommentId) {
                        scope.comments.splice(index, 1);
                    }
                });
            });

            scope.edit = function (updatedComment, comment) {
                phpLightCommentFactory.edit(updatedComment, comment).then(
                    function (response) {
                        console.log(response.data);
                    },
                    function (error) {
                        console.error(error);
                    }
                );
            }
        }
    };
}]);
