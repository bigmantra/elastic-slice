// declare var jQCloud;

import * as _ from "lodash";

interface iJQCloud extends JQuery {

  jQCloud:any;
}

/* @ngInject */
export default    function cloudWidget($parse) {
  // Usage:
  //
  // Creates:
  //

  var directive:{restrict:string; templateUrl:string; replace:boolean; link:(($scope, $elem, $attr, widgetCtrl)=>any)};
  var defaults = jQuery.fn.jQCloud.defaults.get(),
    jqcOptions = [];

  for (var opt in defaults) {
    if (defaults.hasOwnProperty(opt)) {
      jqcOptions.push(opt);
    }
  }


  directive = {
    restrict: 'E',
    templateUrl: 'app/dashboards/widgets/widget-cloud.tmpl.html',
    // template:'<div></div>',
    replace: true,
    /*    scope: {
     words: '=words',
     afterCloudRender: '&'
     },*/
    link: function ($scope, $elem, $attr, widgetCtrl) {
      var
        options:any = {};

      $scope.words = [];


      for (var i = 0, l = jqcOptions.length
        ; i < l; i++) {
        var opt = jqcOptions[i];
        var attr = $attr[
            opt] || $elem.attr(opt);
        if (attr !== undefined) {
          options[opt] =

            $parse(attr)();
        }
      }

      if ($scope.afterCloudRender) {
        options.afterCloudRender = $scope.afterCloudRender;
      }

      var jqElem = <iJQCloud>jQuery($elem);


      jqElem.jQCloud($scope.words, options);

      $scope.$watchCollection('words',
        function () {
          $scope.$evalAsync(function () {
            var words = [];
            $.extend(
              words
              ,

              $scope.words);
            jqElem.jQCloud(
              'update', words);
          });


        });
      $elem.bind('$destroy', function () {
        jqElem.jQCloud('destroy');
      });

      function setWords() {

        var cloudData = $scope.indexVM.results && ($scope.indexVM.results.aggregations.comments_cloud_aggr || $scope.indexVM.results.aggregations.filtered_comments_cloud_aggr.
            comments_cloud_aggr);
        $scope.words = [];
        angular.forEach(
          cloudData && cloudData.buckets, (bucket)=> {

            if (!(_.find($scope.indexVM.getFilters(), (filter)=> {
                return filter['commentsTerms'] === bucket.key;

              }))) {

              $scope.words.push({text: bucket.key, weight: bucket.doc_count})

            }

          })


      }


      $scope.removeWord = function (word) {

        $scope.words.splice(_.findIndex($scope.words, (item)=> item.text == word), 1);


      }

      $scope.$watch('indexVM.loading', (newval, oldval) => {

        if ((oldval != newval) && (newval!=true)) {
          setWords()
        }


      });


      /*
       $scope.$watch(()=> {

       console.log('watching')

       return $scope.indexVM.selectedTabIndex;
       return $scope.indexVM.selectedTabIndex;
       },(oldval,newval)=>{

       if(oldval!=newval) setWords();

       })
       */


      /*      $scope.$watch(()=> {
       return $scope.indexVM.results && $scope.indexVM.results.hits.total
       }, ()=> {

       setWords();

       })*/


    }


  };
  return directive;

}
