/// <reference path="../reference.ts" />

module ETR {
	var Application = angular.module("ETR", []);
	Application.service("g", GameState);
	Application.controller("RootContainerController", RootContainerController);
	Application.controller("SplashScreenController", SplashScreenController);
	Application.controller("HallwayRoomController", HallwayRoomController);
}
