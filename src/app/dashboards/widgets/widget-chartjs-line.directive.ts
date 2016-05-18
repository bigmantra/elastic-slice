/* @ngInject */
export default    function chartjsLineWidget() {
  // Usage:
  //
  // Creates:
  //
  var directive = {
    require: 'uicoreWidget',
    link: link,
    restrict: 'A',

  };
  return directive;

  function link($scope, $element, attrs, widgetCtrl) {


    widgetCtrl.setMenu({
      icon: 'zmdi zmdi-more-vert',
      items: [{
        icon: 'zmdi zmdi-refresh',
        title: 'Refresh',
        click: function () {

          refreshData();


        }
      }, {
        icon: 'zmdi zmdi-share',
        title: 'Share'
      }, {
        icon: 'zmdi zmdi-print',
        title: 'Print'
      }]
    });


    $scope.onClick = function (points, evt) {
      // console.log(points, evt);
    };


    function refreshData() {


      var chartData=$scope.indexVM.results && ($scope.indexVM.results.aggregations.surveyYear_chart_aggr || $scope.indexVM.results.aggregations.filtered_surveyYear_chart_aggr.surveyYear_chart_aggr);


      $scope.lineChart = {
        labels: [],
        series: ['# Responses'],
        options: {
          datasetFill: false,
          responsive: true
        },
        data: [[]]
      };

      if (chartData && chartData.buckets) {


        angular.forEach(chartData.buckets, (value, key)=> {


          if(chartData.buckets.length==1){

            angular.forEach(value.surveyYear_chart_aggr_month_count.buckets, (childvalue, childkey)=> {

              $scope.lineChart.labels.push(childvalue.key)
              $scope.lineChart.data[$scope.lineChart.data.length - 1].push(childvalue.doc_count);

            })
          }
          else{
            $scope.lineChart.labels.push(value.key)
            $scope.lineChart.data[$scope.lineChart.data.length - 1].push(value.doc_count);
          }


        })


      }


    }

    $scope.$watch(()=> {
      return $scope.indexVM.results && $scope.indexVM.results.hits.total
    }, ()=> {

      refreshData()
    })

    /*    // Simulate async data update
     $scope.intervalPromise = $interval(randomData, 50000);*/
  }
}
