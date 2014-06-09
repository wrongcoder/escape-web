/// <reference path="../reference.ts" />

module ETR {
	export class HallwayRoomController extends AbstractRoomController {
		private caption: string = undefined;

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
				this.g.flag.vasePickedUp = true;
			}

			if (clicked === "table" && this.g.flag.vasePickedUp === true) {
				if (this.g.inventory.isSelected(ItemDB['vase'])) {
					this.g.inventory.remove();
					this.g.flag.vasePickedUp = false;
					this.caption = "put-back";
				}
			}
		}

		showVase(): boolean {
			return !this.g.flag.vasePickedUp;
		}
	}
}
