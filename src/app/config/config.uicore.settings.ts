/* @ngInject */
export default    function translateConfig(uicoreSettingsProvider, uicoreRouteProvider) {
  var now = new Date();
  // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
  uicoreSettingsProvider.setName('elasticslice');
  uicoreSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' bigmantra.com');
  uicoreSettingsProvider.setLogo('assets/images/logo.png');
  // set current version of app (shown in footer)
  uicoreSettingsProvider.setVersion('0.0.1');
  // set the document title that appears on the browser tab
  uicoreRouteProvider.setTitle('Elastic Slice');
  uicoreRouteProvider.setSeparator('|');
}
