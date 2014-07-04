//     	require('nw.gui').Window.get().showDevTools();
        var gui = require('nw.gui');
		var request = require('request');
        window.console.log(gui.App);
		function mainCtrl($scope){
			$scope.stream = 'leveluplive';
			$scope.openStream = function(stream){
				var new_win = gui.Window.open('stream/'+stream,{
					  "position": "center",
					  "focus": true,
					  "frame": false,
					  "toolbar": false,
				      "height":     400,
				      "width":      600
					});
			}
            $scope.selectGame = function(game){
				$scope.games = [];
				window.console.log("game = "+game);
				request({
					url: 'https://api.twitch.tv/kraken/streams?game='+game,
					headers: {
				        'Accept': 'application/vnd.twitchtv.v3+json'
				    }
				}, function(error, response, body){
					if(error){
	                	window.console.log('error = ' + error);
					}
					var output = JSON.parse(body);
					window.console.log(output.streams);
					$scope.streams = output.streams;
					$scope.$apply();
				});
            }

			//load the list of games from the Twitch API
			request({
				url: 'https://api.twitch.tv/kraken/games/top?limit=100',
				headers: {
			        'Accept': 'application/vnd.twitchtv.v3+json'
			    }
			}, function(error, response, body){
				if(error){
                	window.console.log('error = ' + error);
				}
				var output = JSON.parse(body);
				window.console.log(output.top);
				$scope.games = output.top;
				$scope.$apply();
			});
		}

