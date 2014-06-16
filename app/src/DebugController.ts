/// <reference path="../reference.ts" />

module ETR {
	export class DebugController {
		private g: GameState;
		private $templateCache: ng.ITemplateCacheService;
		private $timeout: ng.ITimeoutService;

		giveItemId: string = '';

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g", "$templateCache", "$timeout" ];

		constructor(g: GameState, $templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService) {
			this.g = g;
			this.$templateCache = $templateCache;
			this.$timeout = $timeout;
		}

		reloadView(): void {
			var rootView = this.g.rootView;
			this.$timeout(() => { this.g.rootView = rootView }, 0);
			this.$templateCache.removeAll();
			this.g.rootView = '';
		}

		toggleBorders(): void {
			this.g.displayContainerBorders = !this.g.displayContainerBorders;
		}

		isBooleanFlag(flagName: string): boolean {
			return typeof this.g.flag[flagName] === "boolean";
		}

		flipBooleanFlag(flagName: string): void {
			this.g.flag[flagName] = !this.g.flag[flagName];
		}

		giveItem(): void {
			var item = ItemDB[this.giveItemId];
			if (item !== undefined) {
				this.g.inventory.add(item);
			}
			this.giveItemId = '';
		}

		removeSelectedItem(): void {
			this.g.inventory.remove();
		}
	}
}
