angular.module('app')
.controller('MenuController', function($scope) {
    $scope.links = [
        {nome: 'Home', url: '/#/'},
        {nome: 'Xablau', url: '/#/xablau'},
        {nome: 'Conceitos Vistos Neste Projeto', url: '/#/conceitos'}
    ];
});