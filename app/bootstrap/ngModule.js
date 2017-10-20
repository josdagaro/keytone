import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';
import 'angular-hammer';
import 'node_modules/ng-table/bundles/ng-table.min';
import 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap';

export const ngModule = angular.module('keytone', [uiRouter, 'ngAnimate', 'hmTouchEvents', 'ngTable', 'ui.bootstrap']);

const BLANK_MODULE = {
    states: [],
    components: {},
    directives: {},
    services: {},
    filters: {},
    configBlocks: [],
    runBlocks: []
};

export function loadNgModule(ngModule, appModule) {
    let module = Object.assign({}, BLANK_MODULE, appModule);
    ngModule.config(['$stateProvider', $stateProvider => module.states.forEach(state => $stateProvider.state(state))]);
    Object.keys(module.components).forEach(name => ngModule.component(name, module.components[name]));
    Object.keys(module.directives).forEach(name => ngModule.directive(name, module.directives[name]));
    Object.keys(module.services).forEach(name => ngModule.service(name, module.services[name]));
    Object.keys(module.filters).forEach(name => ngModule.filter(name, module.filters[name]));
    module.configBlocks.forEach(configurationBlock => ngModule.config(configurationBlock));
    module.runBlocks.forEach(runBlock => ngModule.run(runBlock));
    return ngModule;
}
