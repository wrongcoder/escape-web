/// <reference path="../reference.ts" />

module ETR {
	export class ExitLightRoomController extends AbstractRoomController {
		private caption: string = undefined;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			super(g);
		}

		click($event: MouseEvent, clicked: string) {
			$event.stopPropagation();

			switch(clicked) {
				case "closedDoor":
					this.caption = "openedDoor";
					this.g.flag.doorOpen = true;
					break;
				case "openDoor":
					this.caption = "lights";
					break;
				case "hallway":
					this.g.rootView = "hallway";
					break;
				default:
					this.caption = undefined;
					break;
			}
		}

	}
}
