/* @ngInject */
export default    function moduleConfig($stateProvider, uicoreMenuProvider) {

  $stateProvider
/*    .state('elasticslice.sales-layout', {
      abstract: true,
      views: {
        sidebarLeft: {
          templateUrl: 'app/elasticslice/components/menu/menu.tmpl.html',
          controller: 'MenuController',
          controllerAs: 'vm'
        },
        content: {
          template: '<div id="admin-panel-content-view" flex ui-view></div>'
        },
        belowContent: {
          template: '<div ui-view="belowContent"></div>'
        }
      }
    })*/
    .state('elasticslice.dashboard-general', {
      url: '/dashboards/general',
      templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
    })
    .state('elasticslice.dashboard-analytics', {
      url: '/dashboards/analytics',
      templateUrl: 'app/dashboards/analytics/dashboard-analytics.tmpl.html',
      controller: 'DashboardAnalyticsController',
      controllerAs: 'vm'
    })
    .state('elasticslice.dashboard-server', {
      url: '/dashboards/server',
      templateUrl: 'app/examples/dashboards/server/dashboard-server.tmpl.html',
      controller: 'DashboardServerController',
      controllerAs: 'vm'
    })
    .state('elasticslice.dashboard-widgets', {
      url: '/dashboards/widgets',
      templateUrl: 'app/examples/dashboards/widgets.tmpl.html'
    })
    .state('elasticslice.dashboard-social', {
      url: '/dashboards/social',
      templateUrl: 'app/examples/dashboards/social/dashboard-social.tmpl.html',
      controller: 'DashboardSocialController',
      controllerAs: 'vm'
    })
    .state('elasticslice.dashboard-sales', {
      url: '/dashboards/sales',
      data: {
        layout: {
          showToolbar: false
        }
      },
      views: {
        '': {
          templateUrl: 'app/examples/dashboards/sales/dashboard-sales.tmpl.html',
          controller: 'DashboardSalesController',
          controllerAs: 'vm'
        },
        'belowContent': {
          templateUrl: 'app/examples/dashboards/sales/fab-button.tmpl.html',
          controller: 'SalesFabController',
          controllerAs: 'vm'
        }
      }
    })
    .state('elasticslice.dashboard-draggable', {
      url: '/dashboards/draggable-widgets',
      templateUrl: 'app/examples/dashboards/dashboard-draggable.tmpl.html',
      controller: 'DashboardDraggableController',
      controllerAs: 'vm'
    });

  uicoreMenuProvider.addMenu({
    name: 'Dashboards',
    icon: 'zmdi zmdi-home',
    type: 'dropdown',
    priority: 1.1,
    children: [{
      name: 'Analytics',
      state: 'elasticslice.dashboard-analytics',
      type: 'link'
    }, {
      name: 'General',
      state: 'elasticslice.dashboard-general',
      type: 'link'
    }, {
      name: 'Sales',
      state: 'elasticslice.dashboard-sales',
      type: 'link'
    }, {
      name: 'Server',
      state: 'elasticslice.dashboard-server',
      type: 'link'
    }, {
      name: 'Social',
      state: 'elasticslice.dashboard-social',
      type: 'link'
    }, {
      name: 'Widgets',
      state: 'elasticslice.dashboard-widgets',
      type: 'link'
    }, {
      name: 'Draggable',
      state: 'elasticslice.dashboard-draggable',
      type: 'link'
    }]
  });

}


