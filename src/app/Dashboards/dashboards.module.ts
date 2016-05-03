import moduleConfig from "./dashboards.config";
import DashboardAnalyticsController from "./analytics/dashboard-analytics.controller";


export default angular
  .module('elastucslice.pages', [])
  .config(moduleConfig)
  .controller('DashboardAnalyticsController', DashboardAnalyticsController)





