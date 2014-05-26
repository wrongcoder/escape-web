/// <reference path="../reference.ts" />

module ETR {
	export class RootContainerController {
		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g" ];
		constructor($scope, g: GameState) {
			$scope.g = g;
		}
	}
}
