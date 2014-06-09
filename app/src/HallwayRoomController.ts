/// <reference path="../reference.ts" />

module ETR {
	export class HallwayRoomController extends AbstractRoomController {
		private caption: string = undefined;
		private showVase: boolean = true; // FIXME This is not the right plce to put this

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g" ];

		constructor($scope, g: GameState) {
			super($scope, g);
		}

		click($event: MouseEvent, clicked: string) {
			$event.stopPropagation();
			this.caption = clicked;

			if (clicked === "vase") {
				this.g.inventory.add(ItemDB['vase']);
				this.showVase = false;
			}

			if (clicked === "table" && this.showVase === false) {
				if (this.g.inventory.isSelected(ItemDB['vase'])) {
					this.g.inventory.remove();
					this.showVase = true;
					this.caption = "put-back";
				}
			}
		}
	}
}
