/* @ngInject */
export default    function chartjsLineWidget($timeout, $interval) {
  // Usage:
  //
  // Creates:
  //
  var directive = {
    require: '^uicoreWidget',
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

          console.log(widgetCtrl.data)
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
      console.log(points, evt);
    };

    function refreshData() {

      $scope.lineChart = {
        labels: [],
        series: ['# matching respondents'],
        options: {
          datasetFill: false,
          responsive: true
        },
        data: [[]]
      };

      if (widgetCtrl.data && widgetCtrl.data.buckets) {


        angular.forEach(widgetCtrl.data.buckets, (value, key)=> {
          console.log(value.key)
          $scope.lineChart.labels.push(value.key)
          $scope.lineChart.data[$scope.lineChart.data.length - 1].push(value.doc_count);
        })


      }


    }

    $scope.$watch(()=> {
      return widgetCtrl.data && widgetCtrl.data.buckets
    }, ()=> {

      console.log('something changed')
      refreshData()
    })

    /*    // Simulate async data update
     $scope.intervalPromise = $interval(randomData, 50000);*/
  }
}
