/// <reference path="../reference.ts" />

module ETR {
	export class GameState {
		/** Name of the view displayed by the root controller */
		rootView = "splash";

		/** Currently selected inventory item */
		inventorySelected: Item = null;

		/** Items in inventory */
		inventory: Item[] = [];

		/** Whether to display debug borders on .container divs */
		displayContainerBorders = false;
	}
}
