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
		clickedOnHandler: (g, item) => {
			var hammer = ItemDB["hammer"];
			var vase = ItemDB["vase"];
			if (item === vase) {
				g.inventory.removeItem(hammer);
				g.inventory.removeItem(vase);
				g.inventory.add(ItemDB["key"]);
				return true;
			}
			return false;
		}
	});

	item({
		id: "key",
		name: "House key",
		icon: "key.png",
	});

}
