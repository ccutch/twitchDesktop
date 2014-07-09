//require('nw.gui').Window.get().showDevTools();
var aot = false;

function streamCtrl($scope, $routeParams){
	$scope.stream = $routeParams.stream;
	$scope.hovered = false;
	window.console.log("stream = " + $scope.stream);
}