/// <reference path="../reference.ts" />

module ETR {

	export var ItemDB: { [key: string]: Item } = {};

	export class Item {
		id: string;
		name: string;
		icon: string;
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

}
