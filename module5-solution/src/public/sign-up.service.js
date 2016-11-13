(function () {
  "use strict";

  angular.module('public')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ['MenuService']
  function SignUpService(MenuService) {
    var service = this;
    var info = {};

    service.processInfo = function (firstName, lastName, emailAddress, phoneNumber, menuNumber) {
      info.firstName = firstName;
      info.lastName = lastName;
      info.emailAddress = emailAddress;
      info.phoneNumber = phoneNumber;

      MenuService.getFavouriteItem(menuNumber).then(function (response) {
        info.favouriteItem = response.data;
      });
    };

    service.getInfo = function () {
      return info;
    }
  }
})();
