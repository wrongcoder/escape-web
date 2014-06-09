/// <reference path="../reference.ts" />

module ETR {
	export class SplashScreenController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			this.g = g;
		}

		click(): void {
			this.g.rootView = "hallway";
		}
	}
}
