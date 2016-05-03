import uicoreStateController from "./states/uicore/uicore.controller";
import triDefaultContent from "./default/default-content.directive";
import DefaultLayoutController from "./default/default-layout.controller";

export default angular
  .module('uicore.layouts', [])
  .controller('uicoreStateController', uicoreStateController)
  .directive('uicoreDefaultContent', triDefaultContent)
  .controller('DefaultLayoutController', DefaultLayoutController)
