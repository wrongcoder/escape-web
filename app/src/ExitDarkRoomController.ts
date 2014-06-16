/// <reference path="../reference.ts" />

module ETR {
	export class ExitDarkRoomController extends AbstractRoomController {
		private caption: string = undefined;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			super(g);
		}

		click($event: MouseEvent, clicked: string) {
			$event.stopPropagation();

			switch (clicked) {
				case "closedDoor":
					this.caption = "openedDoor";
					this.g.flag.doorOpen = true;
					break;
				case "openDoor":
					this.g.rootView = "game-over";
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
}
