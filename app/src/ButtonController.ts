/// <reference path="../reference.ts" />

module ETR {
	export class ButtonController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			this.g = g;
		}

		inventoryIndexes(start: number, length: number): number[] {
			var indexes: number[] = new Array(length);
			for (var i = 0; i < length; i++) {
				indexes[i] = start + i;
			}
			return indexes;
		}

		click($event: Event, ix: number): void {
			$event.stopPropagation();
			this.g.inventory.index = ix;
		}
	}

}
