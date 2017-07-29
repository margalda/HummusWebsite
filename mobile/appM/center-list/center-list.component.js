angular.
module('centerList').
component('centerList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'appM/list.template.html',
  controller: function CenterListController($http) {
            var self = this;
            $http.get('/data?_collection=center').then(function(response) {
                self.list = response.data;
            });
        }
});