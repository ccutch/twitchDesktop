require('nw.gui').Window.get().showDevTools();
var aot = false;

function streamCtrl($scope, $routeParams){
	$scope.stream = $routeParams.stream;
	//window.location.href.split('#')[1];

	window.console.log("stream = " + $scope.stream);
}