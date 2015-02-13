angular.module('myApp', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria']);

angular.module('myApp')
  .controller('appCtrl', ['$scope',
      function($scope){

        vm = this

        vm.submit = function() {
          console.log("hello");
        }; 

     }]);
