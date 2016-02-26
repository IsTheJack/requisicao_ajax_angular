angular.module('app')
.controller('CepController', function($scope, $http) {

    $scope.buscarEndereco = function(cep) {
        $scope.alert = {};
        $scope.retorno = {};

        var semRetorno = function() {
            $scope.alert.tipo = 'warning';
            $scope.alert.mensagem = 'Não foi possível encontrar o CEP';
            $scope.retorno = {};
            $scope.tituloTabela = false;
        };

        var comRetorno = function(retorno) {
            $scope.alert.tipo = 'success';
            $scope.alert.mensagem = 'CEP ' + retorno.code + ' encontrado!';

            $scope.retorno = retorno;
            $scope.tituloTabela = "Resultado:";
        };
        console.log($scope.formulario);
        if ($scope.formulario.$valid) {
            $http.get('http://apps.widenet.com.br/busca-cep/api/cep/' + cep + '.json') // Faz a requisição
            .success(function(retorno) { // Se a requisição foi bem sucedida
                if(retorno.status) { // Verifica se o cep foi encontrado pela chave status do json retornado
                    console.log('Achou o endereço');
                    comRetorno(retorno);
                }
                else { // Se deu pau na requisição
                    console.log('Não Achou o endereço');
                    semRetorno();
                }
            })
            .error(function(e) {
                console.warn(e);
                semRetorno();
            });
        }
    }

});