/// <reference path="../reference.ts" />

module ETR {
	export class ButtonController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g" ];

		constructor($scope, g: GameState) {
			this.g = g;
			$scope.c = this;
			$scope.g = g;
		}

		inventoryIndexes(start: number, length: number) {
			var indexes: number[] = new Array(length);
			for (var i = start; i <= length; i++) {
				indexes[i] = start + i;
			}
			return indexes;
		}
	}

}
