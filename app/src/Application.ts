/// <reference path="../reference.ts" />

module Application {
	var Application = angular.module("Application", []);
	Application.service("g", GlobalState);
	Application.controller("RootViewController", RootViewController);
	Application.controller("HelloWorldController", HelloWorldController);
}
