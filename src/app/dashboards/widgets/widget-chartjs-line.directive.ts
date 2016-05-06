

    /* @ngInject */
export default    function chartjsLineWidget($timeout, $interval) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            require: 'uicoreWidget',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs, widgetCtrl) {
            widgetCtrl.setLoading(true);

            $timeout(function() {
                widgetCtrl.setLoading(false);
                randomData();
            }, 1500);

            widgetCtrl.setMenu({
                icon: 'zmdi zmdi-more-vert',
                items: [{
                    icon: 'zmdi zmdi-refresh',
                    title: 'Refresh',
                    click: function() {
                        $interval.cancel($scope.intervalPromise);
                        widgetCtrl.setLoading(true);
                        $timeout(function() {
                            widgetCtrl.setLoading(false);
                            randomData();
                        }, 1500);
                    }
                },{
                    icon: 'zmdi zmdi-share',
                    title: 'Share'
                },{
                    icon: 'zmdi zmdi-print',
                    title: 'Print'
                }]
            });

            $scope.lineChart = {
                labels: ['Dec-15', 'Jan-16', 'Feb-16', 'Mar-16', 'April-16'],
                series: ['NPS 1 Month', 'NPS Rolling 3 Months', 'NPS Rolling 12 Months'],
                options: {
                    datasetFill: false,
                    responsive: true
                },
                data: []
            };

            function randomData() {
                $scope.lineChart.data = [];
                for(var series = 0; series < $scope.lineChart.series.length; series++) {
                    var row = [];
                    for(var label = 0; label < $scope.lineChart.labels.length; label++) {
                        row.push(Math.floor((Math.random() * 100) + 1));
                    }
                    $scope.lineChart.data.push(row);
                }
            }

            // Simulate async data update
            $scope.intervalPromise = $interval(randomData, 50000);
        }
    }
