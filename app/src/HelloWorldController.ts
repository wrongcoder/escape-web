/// <reference path="../reference.ts" />

module Application {

	export class HelloWorldController {
		g: GlobalState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g", "$scope" ];

		constructor(g: GlobalState, $scope) {
			this.g = g;
			$scope.c = this;
		}

		increment(): void {
			this.g.number += 1;
		}

		decrement(): void {
			this.g.number -= 1;
		}

		getNumber(): number {
			return this.g.number;
		}
	}

}
