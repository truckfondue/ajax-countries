// var _ = require('lodash')

angular.module('ajaxApp', [])

angular.module('ajaxApp').controller('ajaxCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.title = 'AJAX'

	$scope.countries = []

	$scope.load = function() {
		console.log('load test')
		$http({
			method : 'GET',
			url    : '/countries',
		}).then(function(returnData) {
			console.log(returnData.data)
			console.log($scope.query)

			var query = new RegExp($scope.query, 'gi')

			$scope.countries = returnData.data.filter(function(country) {
				return country.name.match(query)
			})
			

		}, function(err) {
			console.log('Error: ', err)
		})
	}




}])