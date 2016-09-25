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
                      {name: "bread", quantity: 8},
                      {name: "potato", quantity: 4},
                      {name: "tomatoes", quantity: 3},
                      {name: "onion", quantity: 2},
                      {name: "olive oil", quantity: 1},
                      {name: "salt", quantity: 1},
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