import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('app.home', []);

// Include our UI-Router config settings
homeModule.config(function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.home', {
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'home/home.html',
      title: 'Home'
    });

});


// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);


export default homeModule;
