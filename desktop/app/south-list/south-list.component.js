angular.
module('southList').
component('southList', {
  // Note: The URL is relative to our `index.html` file
   templateUrl: 'app/list.template.html',
  controller: function SouthListController($http) {
            var self = this;
            $http.get('/data?_collection=south').then(function(response) {
                self.list = response.data;
            });
        }
});