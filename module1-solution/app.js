(function () {
	"use strict";

	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ["$scope"];

	function LunchCheckController($scope) {
		$scope.calculateResult = function () {
			var message = "";

			if ($scope.items) {
				var items = $scope.items.split(",");
				var itemsCount = items.length;

				if (itemsCount > 3) {
					message = "Too much!";
				} else {
					message = "Enjoy!";
				}
			} else {
				message = "Please enter data first";
			}

			$scope.message = message;
		};
	};
})();