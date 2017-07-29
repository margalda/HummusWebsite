angular.
module('northList').
component('northList', {
  // Note: The URL is relative to our `index.html` file
   templateUrl: 'appM/list.template.html',
  controller: function NorthListController($http) {
            var self = this;
            $http.get('/data?_collection=north').then(function(response) {
                self.list = response.data;
            });
        }
});