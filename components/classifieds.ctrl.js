(function() {

    "use strict";

    angular
        .module("angularApp")
        .controller("classifiedsCtrl", function($scope) {

            $scope.name = {
                firstName: "Andreii",
                lastName: "Kucheruk"
            };

            $scope.message = "Hello, World!!!";

        });
})();