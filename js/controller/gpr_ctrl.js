angular.module('gpr').controller('gprCtrl', function($scope){
	
	$scope.usuarios = [
	{name:"Anderson", email:"jony@gmail.com" ,login:"jony", password:"123" ,type:"Admin"},
	{name:"Paulo", email:"paulo@gmail.com" ,login:"paulo", password:"123" ,type:"Admin"},
	{name:"Kecia", email:"kecia@gmail.com" ,login:"kecia", password:"123" ,type:"Cliente"},
	{name:"Manoel", email:"manoel@gmail.com" ,login:"manoel", password:"123" ,type:"Tecnico"}
	];


	$scope.home = true;

	$scope.doLogin = function(contato){
		
	};
	$scope.viewHome = function(){
		$scope.criarCadastro = false;
		$scope.abrirChamado = false;
		$scope.home = true;
		$scope.followChamado = false;
	};	
	$scope.viewCadastro = function(){
		$scope.criarCadastro = true;
		$scope.abrirChamado = false;
		$scope.home = false;
		$scope.followChamado = false;
	};
	$scope.viewChamado = function(){
		$scope.abrirChamado = true;
		$scope.criarCadastro = false;
		$scope.home = false;
		$scope.followChamado = false;
	};	
	$scope.viewAcompanhar = function(){
		$scope.abrirChamado = false;
		$scope.criarCadastro = false;
		$scope.home = false;
		$scope.followChamado = true;
	};	
});