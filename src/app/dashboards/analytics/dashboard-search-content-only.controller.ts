/* @ngInject */
export default  function DashboardSearchContentOnlyController($scope, $timeout, $mdToast, $rootScope, $state,$mdDialog,$mdSidenav,uicoreLayout) {


  var vm=this;


  this.showDetailsDialog=function(event,item){

    $mdDialog.show({
        controller: LoadDataDialogController,
        templateUrl: 'app/dashboards/analytics/response-details-dialog.tmpl.html',
        targetEvent: event,
        locals: {
          item: item
        },
        clickOutsideToClose: true
      })
      .then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, cancelDialog);

  }


  this.openSidebar = function(id) {
    $mdSidenav(id).toggle();
  };

  function LoadDataDialogController($scope, $mdDialog, item) {
    $scope.item = item;

    $scope.closeDialog = function() {
      $mdDialog.cancel();
    };
  }

  function cancelDialog() {
    $scope.alert = 'You closed details dialog ';
  }

  function init(){

    uicoreLayout.setOption('showLeftSideNav', false);
    uicoreLayout.setOption('showToolbar', false);

  }

  init();


}
