(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService']
  function SignUpController (MenuService, SignUpService) {
    var signUpCtrl = this

    signUpCtrl.favouriteItemExists = false;

    signUpCtrl.checkItemExistance = function () {
      MenuService.getFavouriteItem(signUpCtrl.menuNumber).then(function (response) {
        signUpCtrl.favouriteItemExists = true;
      }).catch(function (error) {
        signUpCtrl.favouriteItemExists = false;
      });
    };

    signUpCtrl.processForm = function () {
      signUpCtrl.formProcessed = true;

      SignUpService.processInfo(signUpCtrl.firstName, signUpCtrl.lastName, signUpCtrl.emailAddress, signUpCtrl.phoneNumber, signUpCtrl.menuNumber);
    };
  }
})();
