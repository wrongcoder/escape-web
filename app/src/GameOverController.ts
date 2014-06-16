module ETR {
	export class GameOverController {
		private g: GameState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GameState) {
			this.g = g;
		}

		won(): boolean {
			return this.g.inventory.has(ItemDB["key"]);
		}
	}
}
