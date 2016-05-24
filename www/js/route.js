
angular.module('route', [
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'goodsList.route'
])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/tab/home');

  });
