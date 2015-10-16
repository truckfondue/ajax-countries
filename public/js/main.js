angular.module('ajaxApp', [])

angular.module('ajaxApp').controller('ajaxCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.title = 'AJAX'

	$scope.countries = []

	$scope.load = function() {
		console.log('load test')
		$http({
			method : 'GET',
			url    : '/countries'
		}).then(function(returnData) {
			// console.log(returnData)
			$scope.countries = returnData.data
		}, function(err) {
			console.log('Error: ', err)
		})
	}




}])