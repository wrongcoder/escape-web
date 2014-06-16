/// <reference path="../reference.ts" />

module ETR {

	var invalidCombinationMessageDisplayDuration = 2000; /* ms */

	export class ButtonController {
		private g: GameState;
		private $timeout: ng.ITimeoutService;

		cancelInvalidCombinationMessagePromise: ng.IPromise<void> = undefined;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g", "$timeout" ];

		constructor(g: GameState, $timeout: ng.ITimeoutService) {
			this.g = g;
			this.$timeout = $timeout;
		}

		inventoryIndexes(start: number, length: number): number[] {
			var indexes: number[] = new Array(length);
			for (var i = 0; i < length; i++) {
				indexes[i] = start + i;
			}
			return indexes;
		}

		showInvalidCombinationMessage(): boolean {
			return this.cancelInvalidCombinationMessagePromise !== undefined;
		}

		click($event: Event, ix: number): void {
			var inventory = this.g.inventory;

			$event.stopPropagation();
			this.cancelInvalidCombinationMessage();

			if (inventory.index === undefined) {
				/* No item currently selected */
				this.g.inventory.index = ix;
				return;
			}
			if (ix === undefined) {
				/* Clicked on blank area */
				this.g.inventory.index = undefined;
				return;
			}
			if (ix === inventory.index) {
				/* Clicked on selected item */
				this.g.inventory.index = undefined;
				return;
			}

			/* We say that:
			 *  - the previously selected item CLICKED ON the newly selected item, and
			 *  - the newly selected item WAS CLICKED BY the previously selected item
			 */
			var previousItem = inventory.get();
			var newItem = inventory.get(ix);
			var clickedOnHandler = previousItem.clickedOnHandler;
			var clickedByHandler = newItem.clickedByHandler;

			var handled: boolean = false;

			if (!handled && typeof clickedOnHandler === "function") {
				handled = clickedOnHandler(this.g, newItem);
			}
			if (!handled && typeof clickedByHandler === "function") {
				handled = clickedByHandler(this.g, previousItem);
			}
			if (!handled) {
				this.cancelInvalidCombinationMessagePromise = this.$timeout(() => { this.cancelInvalidCombinationMessagePromise = undefined }, invalidCombinationMessageDisplayDuration);
			}
		}

		cancelInvalidCombinationMessage() {
			if (this.cancelInvalidCombinationMessagePromise !== undefined) {
				this.$timeout.cancel(this.cancelInvalidCombinationMessagePromise);
				this.cancelInvalidCombinationMessagePromise = undefined;
			}
		}

		clickMessage($event: Event): void {
			$event.stopPropagation();
			this.cancelInvalidCombinationMessage();
		}
	}

}
