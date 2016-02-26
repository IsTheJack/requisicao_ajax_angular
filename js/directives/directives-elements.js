angular.module('directivesElements', [])
.directive('cabecalhoSite', function() {
    return {
        restrict: 'E',
        templateUrl: './componentes_html/cabecalho_site.html',
        scope: {
            titulo: '@' // O '@' quer dizer que a variável título receberá uma string (Existe outra notações pra outros tipos de dados)
        }
    };
})
.directive('menuPrincipal', function() {
    return {
        restrict: 'E',
        templateUrl: './componentes_html/menu_principal.html',
        scope: {
            links: '=' // Recebendo diretamente valores de uma variável
        }
    };
})
.directive('alerta', function() {
    return {
        restrict: 'E',
        templateUrl: './componentes_html/alerta.html',
        scope: {
            tipo: '@',
            mensagem: '@'
        }
    };
});