
    angular.module('primeiraApp').controller('AuthCtrl', [
        '$location',
        'msgs',
        AuthController
    ])

    function AuthController($location, msgs){
        const vm = this
        vm.getUser = () => ({ name: 'Usuário Mock', email: 'mock@cod3r.com.br' })

        vm.logout = () => {
            console.log('logout...')
        }
    }
