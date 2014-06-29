/// <reference path="../reference.ts" />

module ETR {
	var Application = angular.module("ETR", []);
	Application.service("g", GameState);
	Application.controller("DebugController", DebugController);
	Application.controller("GameOverController", GameOverController);
	Application.controller("RootContainerController", RootContainerController);
	Application.controller("SplashScreenController", SplashScreenController);
	Application.controller("ButtonController", ButtonController);
	Application.controller("HallwayRoomController", HallwayRoomController);
	Application.controller("ExitDarkRoomController", ExitDarkRoomController);
	Application.controller("ExitLightRoomController", ExitLightRoomController);
	angular.element(document).ready(() => angular.bootstrap(document, ["ETR"]));
}
