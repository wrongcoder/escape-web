/// <reference path="../reference.ts" />

module ETR {

	export class AbstractExitRoomController extends AbstractRoomController {
		caption: string = undefined;

		constructor(g: GameState) {
			super(g);
		}

		click($event: MouseEvent, clicked: string) {
			switch (clicked) {
				case "closedDoor":
					this.caption = "openedDoor";
					this.g.flag.doorOpen = true;
					break;
				case "hallway":
					this.g.rootView = "hallway";
					break;
				case "hammer":
					this.caption = "hammer";
					this.g.inventory.add(ItemDB["hammer"]);
					this.g.flag.hammerPickedUp = true;
					break;
				default:
					this.caption = undefined;
					break;
			}
		}
	}

	export class ExitLightRoomController extends AbstractExitRoomController {
		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			super(g);
		}

		click($event: MouseEvent, clicked: string) {
			$event.stopPropagation();

			switch (clicked) {
				case "openDoor":
					this.caption = "lights";
					break;
				default:
					super.click($event, clicked);
					break;
			}
		}
	}

	export class ExitDarkRoomController extends AbstractExitRoomController {
		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			super(g);
		}

		click($event: MouseEvent, clicked: string) {
			$event.stopPropagation();

			switch (clicked) {
				case "openDoor":
					this.g.rootView = "game-over";
					break;
				default:
					super.click($event, clicked);
					break;
			}
		}
	}

}
