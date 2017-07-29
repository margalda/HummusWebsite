angular.
module('taList').
component('taList', {
  // Note: The URL is relative to our `index.html` file
   templateUrl: 'app/list.template.html',
  controller: function TaListController($http) {
            var self = this;
            $http.get('/data?_collection=ta').then(function(response) {
                self.list = response.data;
            });
        }
});