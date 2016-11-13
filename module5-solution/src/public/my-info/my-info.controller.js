(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['SignUpService', 'ApiPath']
  function MyInfoController(SignUpService, ApiPath) {
    var myInfoCtrl = this;

    myInfoCtrl.basePath = ApiPath;

    myInfoCtrl.info = SignUpService.getInfo()
  }
})();
