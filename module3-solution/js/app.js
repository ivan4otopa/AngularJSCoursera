(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('MenuItemsPath', 'https://davids-restaurant.herokuapp.com/menu_items.json')
  .directive('foundItems', FoundItems);

  function FoundItems() {
    return {
      scope: {
        foundItems: '<',
        onRemove: '&',
        searched: '<'
      },
      templateUrl: 'foundItems.html',
      restrict: 'E'
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;

    narrowItDown.narrowIt = function (searchTerm) {
      narrowItDown.searched = true

      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        var foundItems = response.data.menu_items.filter(function (item) {
          return item.description.indexOf(searchTerm) !== -1;
        })

        narrowItDown.found = foundItems;
      })
    }

    narrowItDown.removeItem = function (index) {
      narrowItDown.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'MenuItemsPath'];
  function MenuSearchService($http, MenuItemsPath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        url: MenuItemsPath
      })
    }
  }
})();
