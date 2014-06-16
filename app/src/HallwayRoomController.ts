/// <reference path="../reference.ts" />

module ETR {
	export class HallwayRoomController extends AbstractRoomController {
		private caption: string = undefined;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			super(g);
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

			if (clicked === "switch") {
				if (this.g.flag.lightsOn) {
					this.caption = "switch-off";
				} else {
					this.caption = "switch-on";
				}
				this.g.flag.lightsOn = !this.g.flag.lightsOn;
			}

			if (clicked === "exit") {
				if (this.g.flag.lightsOn) {
					this.g.rootView = "exit-light";
				} else {
					this.g.rootView = "exit-dark";
				}
			}
		}

		showVase(): boolean {
			return !this.g.flag.vasePickedUp;
		}

		getSuffix(): string {
			return (this.g.flag.lightsOn ? "" : "-dark");
		}

	}
}
