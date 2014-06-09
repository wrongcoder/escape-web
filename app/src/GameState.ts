/// <reference path="../reference.ts" />

module ETR {
	export class GameState {
		/** Name of the view displayed by the root controller */
		rootView = "splash";

		/** Whether to display debug borders on .container divs */
		displayContainerBorders = false;

		/** Current inventory and selected item */
		inventory: Inventory = makeInventory([]);

		/** Game flags */
		flag = {
			vasePickedUp: false,
		};
	}
}
