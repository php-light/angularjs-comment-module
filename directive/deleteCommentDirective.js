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
                if ($rootScope.phpLight && $rootScope.phpLight.comment && $rootScope.phpLight.comment.deleteTemplate) {
                    return $rootScope.phpLight.comment.deleteTemplate;
                }

                return '/web/vendor/php-light-comment/template/delete.html'
            },
            scope: {
                comment: 'comment'
            },
            link: function (scope) {
                scope.delete = function (comment) {
                    // @todo trigger comments reload on success or add to existing comments
                    // phpLightCommentFactory.delete({comment: comment})
                    //     .then(
                    //         function () {
                    //         },
                    //         function (error) {
                    //             console.error(error)
                    //         }
                    //     );
                }
            }
        };
}]);

