/// <reference path="../reference.ts" />

module ETR {
	export class GameState {
		/** Name of the view displayed by the root controller */
		rootView = "splash";

		/** Currently selected inventory item */
		inventorySelected: number = undefined;

		/** Items in inventory */
		inventory: Item[] = [];

		addInventory(item: Item): void {
			this.inventory.push(item);
		}

		/** Whether to display debug borders on .container divs */
		displayContainerBorders = false;

		getSelectedItem(): Item {
			if (this.inventorySelected !== undefined) {
				return this.inventory[this.inventorySelected];
			} else {
				return undefined;
			}
		}

		removeSelectedItem(): void {
			if (this.inventorySelected !== undefined) {
				this.inventory.splice(this.inventorySelected, 1);
				this.inventorySelected = undefined;
			}
		}
	}
}
