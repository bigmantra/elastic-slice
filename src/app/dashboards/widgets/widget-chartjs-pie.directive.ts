/* @ngInject */
export default    function chartjsPieWidget($timeout) {
  // Usage:
  //
  // Creates:
  var directive = {
    require: 'uicoreWidget',
    link: link,
    restrict: 'A'
  };
  return directive;

  function link($scope, $element, attrs, widgetCtrl) {
    widgetCtrl.setLoading(true);

    $timeout(function () {
      widgetCtrl.setLoading(false);
    }, 1500);

    widgetCtrl.setMenu({
      icon: 'zmdi zmdi-more-vert',
      items: [{
        icon: 'zmdi zmdi-refresh',
        title: 'Refresh',
        click: function () {
          widgetCtrl.setLoading(true);
          $timeout(function () {
            widgetCtrl.setLoading(false);
          }, 1500);
        }
      }, {
        icon: 'zmdi zmdi-share',
        title: 'Share'
      }, {
        icon: 'zmdi zmdi-print',
        title: 'Print'
      }]
    });

    $scope.pieChart = {
      labels: ['Promoters', 'Detractors', 'Passives'],
      data: [300, 500, 100]
    };
  }
}
