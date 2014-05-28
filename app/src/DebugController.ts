/// <reference path="../reference.ts" />

module ETR {
	export class DebugController {
		private g: GameState;
		private $templateCache: ng.ITemplateCacheService;
		private $timeout: ng.ITimeoutService;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope", "g", "$templateCache", "$timeout" ];

		constructor($scope, g: GameState, $templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService) {
			this.g = g;
			this.$templateCache = $templateCache;
			this.$timeout = $timeout;
			$scope.c = this;
			$scope.g = g;
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
	}
}
