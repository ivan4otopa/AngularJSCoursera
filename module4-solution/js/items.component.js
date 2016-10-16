(function () {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'views/items.html',
    bindings: {
      items: '<'
    }
  })
})()
