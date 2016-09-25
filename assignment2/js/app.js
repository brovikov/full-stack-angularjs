(function (){
'use strict';

angular.module('ShoppingListCheckOff',[])

.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']
function ToBuyShoppingController (ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.buyItemsList()
  toBuy.complete = function (index) {
    ShoppingListCheckOffService.buyItem(index)
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.boughtItemsList()
}

function ShoppingListCheckOffService () {
  var service = this;
  var itemsToBuy =  [
                      {name: "cookies", quantity: 10},
                      {name: "burgers", quantity: 8},
                      {name: "potato", quantity: 4},
                      {name: "tomatoes", quantity: 3},
                      {name: "cucumbers", quantity: 6},
                      {name: "onion", quantity: 2},
                      {name: "ketchup", quantity: 1},
                      {name: "salt", quantity: 1},
                      {name: "beacon", quantity: 4},
                      {name: "tuna", quantity: 3}
                    ]

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(itemsToBuy.splice(itemIndex, 1)[0]);
  };


  service.buyItemsList = function () {
    return itemsToBuy;
  };

  service.boughtItemsList = function () {
    return boughtItems;
  };
}

})();