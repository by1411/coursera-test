(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.items = "";
      $scope.message = "";

      $scope.displayMessage = function () {
        var arrayOfString = $scope.items.split(',');
        if ($scope.items === "") {
          $scope.message = "Please enter data first";
        }
        else if (arrayOfString.length <= 3 && arrayOfString.length > 0) {
          $scope.message = "Enjoy!";
        }
          else {
              $scope.message = "Too much!";
          }
      };


    // function displayMessage (number) {
    //   var string = "";
    //     if (number <= 3)
    //       string = "Enjoy!";
    //       else {
    //         string = "Too much!";
    //       }
    //   return string;
    // }
    }
})();
