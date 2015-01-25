app.controller('SessionsCtrl', function($scope, $rootScope, $location, Auth){

    $scope.signInUser = function(){
      var credentials = {
        email: $scope.newSession.email,
        password: $scope.newSession.password
      };
      //console.log(credentials);

      Auth.login(credentials).then(function(user) {
        //console.log(user);
      }, function(error) {
          $scope.showErrors = true;
          $scope.errors = error.data.errors;
        });
    };

    $scope.signUpUser = function(){
        var credentials = {
            first_name: $scope.newSession.first_name,
            last_name: $scope.newSession.last_name,
            email: $scope.newSession.email,
            password: $scope.newSession.password,
            password_confirmation: $scope.newSession.password_confirmation
        };
        Auth.register(credentials).then(function(registeredUser) {
            //console.log(registeredUser);
        }, function(error) {
            //console.log(error);
        });
    };

    $scope.logOutUser = function(){
        Auth.logout().then(function(oldUser) {
            //console.log(oldUser);
        }, function(error) {
            // console.log(error);
        });
    };

    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });

    $scope.$on('devise:login', function(event, currentUser) {
        $scope.isLoggedIn = Auth.isAuthenticated();
        $location.path("/");
    });

    $scope.$on('devise:logout', function(event, oldCurrentUser) {
        $scope.isLoggedIn = Auth.isAuthenticated();
        $location.path("/");
    });
});
