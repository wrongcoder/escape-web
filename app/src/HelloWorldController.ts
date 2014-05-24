/// <reference path="../reference.ts" />

module Application {

	export interface HelloWorldControllerScope {
		number: number;
	}

	export class HelloWorldController {
		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope" ];
		constructor($scope: HelloWorldControllerScope) {
			$scope.number = 3;
		}
	}

}
