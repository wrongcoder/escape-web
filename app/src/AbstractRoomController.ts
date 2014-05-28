/// <reference path="../reference.ts" />

module ETR {
	export class AbstractRoomController {
		g: GameState;

		constructor($scope, g: GameState) {
			this.g = g;
			$scope.c = this;
			$scope.g = g;
		}
	}
}
