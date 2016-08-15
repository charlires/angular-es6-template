import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import TagsService from './tags.service';
servicesModule.service('Tags', TagsService);

export default servicesModule;
