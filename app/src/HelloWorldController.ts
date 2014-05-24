/// <reference path="../reference.ts" />

module Application {
	export class HelloWorldController {
		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$scope" ];
		constructor($scope) {
			$scope.number = 3;
		}
	}
}
