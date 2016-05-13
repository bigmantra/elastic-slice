import moduleConfig from "./dashboards.config";
import DashboardAnalyticsController from "./analytics/dashboard-analytics.controller";
import chartjsLineWidget from "./widgets/widget-chartjs-line.directive";
import chartjsPieWidget from "./widgets/widget-chartjs-pie.directive";
import loadDataWidget from "./widgets/widget-load-data.directive";
import DashboardSearchContentOnlyController from "./analytics/dashboard-search-content-only.controller";

export default angular
  .module('elastucslice.pages', [])
  .config(moduleConfig)
  .controller('DashboardAnalyticsController', DashboardAnalyticsController)
  .controller('DashboardSearchContentOnlyController', DashboardSearchContentOnlyController)
  .directive('chartjsLineWidget', chartjsLineWidget)
  .directive('chartjsPieWidget', chartjsPieWidget)
  .directive('loadDataWidget', loadDataWidget)




