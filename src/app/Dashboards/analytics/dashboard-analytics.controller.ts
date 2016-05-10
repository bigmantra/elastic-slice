/* @ngInject */
export default  function DashboardAnalyticsController($scope, $timeout, $mdToast, $rootScope, $state,$mdDialog,$mdSidenav) {
  $timeout(function () {
    $rootScope.$broadcast('newMailNotification');
    $mdToast.show({
      template: '<md-toast><span flex>You have new notifications! View them <a href="" ng-click=vm.viewUnread()>here</a></span></md-toast>',
      controller: newMailNotificationController,
      controllerAs: 'vm',
      position: 'bottom right',
      hideDelay: 5000
    });
  }, 10000);

  //////////////

  var vm=this;



  function newMailNotificationController() {
    var vm = this;
    vm.viewUnread = function () {
      $state.go('triangular-no-scroll.email.inbox');
    };
  }


  vm.queryType='MatchQuery';


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

}
