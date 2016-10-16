(function () {
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'views/categories.html',
    bindings: {
      categories: '<'
    }
  })
})()
