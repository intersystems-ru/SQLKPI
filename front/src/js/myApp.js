var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {
	window.s = $scope

	var  baseURL = "http://localhost:57772/rest/sqlkpi";

	$scope.executeSQL = function (sql) {
		console.log("Executing SQL: Start.");
		executeSQLPOST(sql);

	}
	$scope.generateKPI = function (sql, name, className) {
		console.log("Executing SQL: Start.");
		console.log(sql);
		generateKPIPOST(sql, name, className);

	}

	getTest = function () {
		$http.get(baseURL + '/test').
		then(function (response) {
			console.log(response);
		}, function myError(response){
			console.log("error " + response);
		});
	};

	executeSQLPOST = function (sql) {
		var params = {SQL: sql};
		$http.post(baseURL + '/sql', params).
		then(function (response) {
			console.log(response);
		}, function myError(response){
			console.log(response);
		});
	};

	generateKPIPOST = function (sql, name, className) {
		var params = {SQL: qwe, Name: name, Class: className};
		$http.post(baseURL + '/generateKPI', params).
		then(function (response) {
			console.log(response);
		}, function myError(response){
			console.log(response);
		});
	};
});
