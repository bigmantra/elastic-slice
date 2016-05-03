/* @ngInject */
export default    function moduleConfig($stateProvider, uicoreMenuProvider) {

  $stateProvider

    .state('elasticslice.dashboard-analytics', {
      url: '/dashboards/analytics',
      templateUrl: 'app/dashboards/analytics/dashboard-analytics.tmpl.html',
      controller: 'DashboardAnalyticsController',
      controllerAs: 'vm'
    })

  

  uicoreMenuProvider.addMenu({
    name: 'Dashboards',
    icon: 'zmdi zmdi-home',
    type: 'dropdown',
    priority: 1.1,
    children: [{
      name: 'Analytics',
      state: 'elasticslice.dashboard-analytics',
      type: 'link'
    }]
  });

}


