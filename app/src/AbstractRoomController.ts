/// <reference path="../reference.ts" />

module ETR {
	export class AbstractRoomController {
		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g" ];
		constructor($scope, g: GameState) {
			$scope.g = g;
		}
	}
}
