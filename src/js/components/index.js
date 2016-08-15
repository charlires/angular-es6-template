import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import FavoriteBtn from './buttons/btn.component';
componentsModule.component('btn', FavoriteBtn);

export default componentsModule;
