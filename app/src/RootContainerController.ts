/// <reference path="../reference.ts" />

module ETR {
	export class RootContainerController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			this.g = g;
		}
	}
}
