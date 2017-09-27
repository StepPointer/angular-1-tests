angular
    .module("angularApp", ["ngMaterial"])
    .directive("helloWorld", function() {
        return {
            template: "<h1>{{ message }}</h1>"
        }
    });