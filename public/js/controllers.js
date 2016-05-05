'use strict';

var app = angular.module('propertymgrApp');

app.controller('homeCtrl', function($scope, $q, $http, clientDex) {
  $scope.clients = clientDex;
});

app.controller('clientsCtrl', function($scope, $state, $q, $http, clientDex, ClientService) {
  $scope.clients = clientDex;

  $scope.edit = function(client) {
      $state.go('updateClient', {"id": client._id});
  }

  $scope.delete = client => {

    $scope.clients.splice(client._id, 1);
    ClientService.delete(client._id)
    .then( ()=>  {
      // $state.go('clients');
    })
    .catch(err => {
      console.log('err', err.data);
    });
  }
});

app.controller('newClientCtrl', function($scope, $state, $q, $http, ClientService) {

  $scope.addNewClient = () => {
    ClientService.create($scope.newClient)
    .then( ()=>  {
      $state.go('clients');
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }
});

app.controller('updateClientCtrl', function($scope, $state, ClientService) {

  ClientService.getById($state.params.id)
    .then(function(res){
      $scope.client = res.data;
    })

  $scope.updateClient = () => {

    ClientService.edit($state.params.id, $scope.client)
    .then( ()=>  {
      $state.go('clients')
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }
});

app.controller('propertiesCtrl', function($scope, $state, propertyDex,  PropertymgrService) {
  $scope.properties = propertyDex;


  $scope.editProperty = function(property) {
     $state.go('updateProperty', {"id": property._id});
 }

 $scope.deleteProperty = property => {

   $scope.properties.splice(property._id, 1);
   PropertymgrService.deleteProperty(property._id)
   .then( ()=>  {
     // $state.go('clients');
   })
   .catch(err => {
     console.log('err', err.data);
   });
 }
});

app.controller('newPropertyCtrl', function($scope, $state, $q, $http, PropertymgrService) {
  $scope.addNewProperty = () => {
    PropertymgrService.createProperty($scope.newProperty)
    .then( ()=>  {
      $state.go('properties');
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }
});

app.controller('updatePropertyCtrl', function($scope, $state, PropertymgrService) {

  PropertymgrService.getPropertyById($state.params.id)
    .then(function(res){
      $scope.property = res.data;
    })

  $scope.updateProperty = () => {
    PropertymgrService.editProperty($state.params.id, $scope.property)
    .then( ()=>  {
      $state.go('properties')
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }

});
