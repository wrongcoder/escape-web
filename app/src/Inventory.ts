/// <reference path="../reference.ts" />

module ETR {

	export interface Inventory extends Array<Item> {

		/** Index of selected item, if any */
		index: number;

		/** Retrieve selected inventory item, if any */
		get(): Item;

		/** Retrieve inventory item by index */
		get(ix: number): Item;

		/** Add item to inventory */
		add(Item): number;

		/** Remove selected inventory item, if any */
		remove(): Item;

		/** Remove item from inventory by index */
		remove(number): Item;

		/** Remove item from inventory by object */
		removeItem(Item): Item;

		/** Checks if inventory contains an item */
		has(Item): boolean;

		/** Check if the item is the currently selected one */
		isSelected(Item): boolean;
	}

	export function makeInventory(items: Item[]): Inventory {
		var inventory: any = items.concat();

		inventory.index = <number> undefined;

		inventory.get = function (ix: number): Item {
			if (ix === undefined) {
				return inventory[inventory.index];
			} else {
				return inventory[ix];
			}
		};

		inventory.add = function (item: Item): number {
			if (item !== undefined) {
				return (inventory.push(item) - 1);
			} else {
				return -1;
			}
		};

		inventory.remove = function (arg: any): Item {
			var removeIx: number;

			if (typeof arg === "number") {
				removeIx = arg;
			} else {
				removeIx = inventory.index;
			}

			inventory.index = undefined;
			return inventory.splice(removeIx, 1);
		};

		inventory.removeItem = function (item: Item): Item {
			var removeIx = inventory.indexOf(item);
			if (removeIx >= 0) {
				return inventory.remove(removeIx);
			} else {
				return undefined;
			}
		};

		inventory.has = function (item: Item): boolean {
			return (inventory.indexOf(item) >= 0);
		};

		inventory.isSelected = function (item: Item): boolean {
			return (inventory[inventory.index] === item);
		};

		return inventory;
	}

}
