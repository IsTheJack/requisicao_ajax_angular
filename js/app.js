// Criando o módulo principal da aplicação
// Listando as dependencias do módulo 'app'
angular.module('app', ['ngRoute', 'directivesElements']).
config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/form_cep.html',
        controller: 'CepController' // Lembrete: Tem que devidir o controller, senão dá merda na validação
    });

    $routeProvider.when('/xablau', {
        templateUrl: 'views/xablau.html',
        controller: 'CepController'
    });

    $routeProvider.when('/conceitos', {
        templateUrl: 'views/conceitos.html',
        controller: 'CepController'
    });

    $routeProvider.otherwise('/home');
}]);