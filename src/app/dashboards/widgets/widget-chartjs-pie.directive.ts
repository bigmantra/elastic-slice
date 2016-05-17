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
    widgetCtrl.setLoading(false);


    widgetCtrl.setMenu({
      icon: 'zmdi zmdi-more-vert',
      items: [{
        icon: 'zmdi zmdi-refresh',
        title: 'Refresh',
        click: function () {
          widgetCtrl.setLoading(true);
          refreshData();
          widgetCtrl.setLoading(false);

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
      labels: [],
      data: [],
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    };


    function refreshData() {


      var chartData=$scope.indexVM.results && ($scope.indexVM.results.aggregations.category_chart_aggr || $scope.indexVM.results.aggregations.filtered_category_chart_aggr.category_chart_aggr);

      $scope.pieChart = {
        labels: [],
        data: []
      };

      if (chartData && chartData.buckets) {


        angular.forEach(chartData.buckets, (value, key)=> {
          $scope.pieChart.labels.push(value.key)
          $scope.pieChart.data.push(value.doc_count);
        })

      }


    }

    $scope.$watch(()=> {
      return $scope.indexVM.results && ($scope.indexVM.results.aggregations.filtered_category_chart_aggr || $scope.indexVM.results.aggregations.category_chart_aggr)
    }, ()=> {

      refreshData()
    })


  }
}
