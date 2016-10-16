(function () {
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('BaseApiUrl', 'https://davids-restaurant.herokuapp.com/')

  MenuDataService.$inject = ['$http', 'BaseApiUrl']
  function MenuDataService($http, BaseApiUrl) {
    var menuData = this

    menuData.getAllCategories = function () {
      return $http({
        url: (BaseApiUrl + 'categories.json')
      })
    }

    menuData.getItemsForCategory = function (categoryShortName) {
      return $http({
        url: (BaseApiUrl + 'menu_items.json?category=' + categoryShortName)
      })
    }
  }
})()
