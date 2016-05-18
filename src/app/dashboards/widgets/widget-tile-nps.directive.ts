import * as _ from 'lodash';


/* @ngInject */
export default    function tileNPSWidget() {
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

    function refreshData() {




      var categoryBuckets= $scope.indexVM.results && (($scope.indexVM.results.aggregations.filtered_category_chart_aggr && $scope.indexVM.results.aggregations.filtered_category_chart_aggr.category_chart_aggr) || $scope.indexVM.results.aggregations.category_chart_aggr);

      var promoterObj,detractorObj;

      _.forEach((categoryBuckets),(bucket)=> promoterObj=_.find(bucket, { 'key': 'Promoter'}) || {doc_count:0})
      _.forEach((categoryBuckets),(bucket)=> detractorObj=_.find(bucket, { 'key': 'Detractor'}) || {doc_count:0})
      var totalCount= ($scope.indexVM.results && $scope.indexVM.results.hits && $scope.indexVM.results.hits.total) ||0

      var npsScore = (((promoterObj.doc_count/totalCount) *100.0) - ((detractorObj.doc_count/totalCount) * 100.0))

      console.log('NPS',npsScore);


    }

    $scope.$watch(()=> {
      return $scope.indexVM.results && ($scope.indexVM.results.aggregations.filtered_category_chart_aggr || $scope.indexVM.results.aggregations.category_chart_aggr)
    }, ()=> {

      refreshData();
    })

    /*    // Simulate async data upd  ate
     $scope.intervalPromise = $interval(randomData, 50000);*/
  }
}
