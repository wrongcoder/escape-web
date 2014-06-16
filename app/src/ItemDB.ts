/// <reference path="../reference.ts" />

module ETR {

	export var ItemDB: { [key: string]: Item } = {};

	export interface Item {
		id: string;
		name: string;
		icon: string;

		/** this was selected, then clicked on argument; takes precedence */
		clickedOnHandler?: (GameState, Item) => boolean;

		/** argument was selected, then clicked on this */
		clickedByHandler?: (GameStat, Item) => boolean;
	}

	function item(newItem: Item) {
		ItemDB[newItem.id] = newItem;
	}

	item({
		id: "vase",
		name: "Vase",
		icon: "vase.png",
	});

	item({
		id: "hammer",
		name: "Hammer",
		icon: "hammer.png",
	});

	item({
		id: "key",
		name: "House key",
		icon: "key.png",
	});

}
