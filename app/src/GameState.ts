/// <reference path="../reference.ts" />

module ETR {
	export class GameState {
		/** Name of the view displayed by the root controller */
		rootView = "splash";

		/** Current inventory and selected item */
		inventory: Inventory = makeInventory([]);

		/** Whether to display debug borders on .container divs */
		displayContainerBorders = false;
	}
}
