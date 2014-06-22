/// <reference path="../reference.ts" />

module Application {

	export interface HelloWorldControllerScope {
		c: HelloWorldController;
	}

	export class HelloWorldController {
		private number: number;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope" ];

		constructor($scope: HelloWorldControllerScope) {
			this.number = 3;
			$scope.c = this;
		}

		increment(): void {
			this.number += 1;
		}

		decrement(): void {
			this.number -= 1;
		}
	}

}
