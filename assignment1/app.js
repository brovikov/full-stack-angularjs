(function (){
'use strict';

angular.module('helthChecker',[])

.controller('CheckerController', CheckerController)
CheckerController.$inject = ['$scope']

function CheckerController ($scope) {

  $scope.generateMessage = function () {
    $scope.emptyAlarmMessage = ""
    $scope.message = ""

    if ($scope.food) {
      var arrayOfFood = $scope.food.split(',')
      length = removeEmptyValues(arrayOfFood).length
      console.log(length)
      if (length > 3) {
            $scope.message = "Too much!"
            return
      } 
      if (length <= 3) {
            $scope.message = "Enjoy!"
            return
      } 
    } else {
      $scope.message = "Please enter data first!"
    }
    
    function removeEmptyValues (actual) {
      var newArray = new Array();
      for (var i = 0; i < actual.length; i++) {
        if (actual[i] && actual[i].replace(/ /g, '')) {
          newArray.push(actual[i]);
        }
      }

      if (newArray.toString() !== actual.toString()) {
        $scope.food = newArray.toString()
        $scope.emptyAlarmMessage = "Yay! Empty values has been filtered out!"
      }
      return newArray;
    }
  }
}
})();