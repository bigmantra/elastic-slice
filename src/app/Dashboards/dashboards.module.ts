import moduleConfig from "./dashboards.config";
import DashboardAnalyticsController from "./analytics/dashboard-analytics.controller";
import chartjsLineWidget from "./widgets/widget-chartjs-line.directive";
import chartjsPieWidget from "./widgets/widget-chartjs-pie.directive";
import loadDataWidget from "./widgets/widget-load-data.directive";

export default angular
  .module('elastucslice.pages', [])
  .config(moduleConfig)
  .controller('DashboardAnalyticsController', DashboardAnalyticsController)
  .directive('chartjsLineWidget', chartjsLineWidget)
  .directive('chartjsPieWidget', chartjsPieWidget)
  .directive('loadDataWidget', loadDataWidget)




