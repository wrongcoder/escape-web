/// <reference path="../reference.ts" />

module ETR {
	export class SplashScreenController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g" ];

		constructor($scope, g: GameState) {
			this.g = g;
			$scope.c = this;
			$scope.g = g;
		}

		click(): void {
			this.g.rootView = "hallway";
		}
	}
}
