
angular.module('primeiraApp').component('field', {
    bindings: {
        id: '@',
        label: '@',
        grid: '@',
        placeholder: '@',
        type: '@',
        model: '=',
    },
    controller: [
        'gridSystem',
        function (gridSystem) {
            this.$onInit = () => this.gridClass = gridSystem.toCssClasses(this.grid)
        },
    ],
    template: `
        <div class="{{ $ctrl.gridClass }}">
            <div class="form-group">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" type="{{ $ctrl.type }}" ng-model="$ctrl.model">
            </div>
        </div>
        `


})