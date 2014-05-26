/// <reference path="../reference.ts" />

module ETR {
	export class SplashScreenController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g" ];

		constructor($scope, g: GameState) {
			this.g = g;
			$scope.g = g;
			$scope.click = this.click;
		}

		click(): void {
			this.g.rootView = "hallway";
		}
	}
}
