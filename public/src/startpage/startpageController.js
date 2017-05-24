


var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {

 //    var playbookState = {
 //     name: 'playbook',
 //     url: '/playbook',
 //     templateUrl :'src/partials/playbook.html'
 //   }
 //
 //   var coachState = {
 //     name: 'coach',
 //     url: '/coach',
 //     templateUrl: 'src/partials/coach.html'
 //   }
 //
 //  var rosterState = {
 //    name: 'depthchart',
 //    url: '/depthchart',
 //    templateUrl: 'src/partials/depthchart.html'
 //  }
 //
 //  var gamestatState = {
 //    name: 'gamestat',
 //    url: '/gamestat',
 //    templateUrl: 'src/partials/gamestats.html'
 //  }
 //
 //
 //
 // $stateProvider.state(playbookState);
 // $stateProvider.state(coachState);
 // $stateProvider.state(rosterState);
 // $stateProvider.state(gamestatState);
 //


//end brackets
});

app.controller('startCtrl', ['$scope', function ($scope){


  $scope.button1 = function(){
    console.log(this.player.name);
    console.log(this.player.college);
    $scope.newteam.push({
        name: this.player.name,
        position: this.player.position,
        college:  this.player.college,
        Str : this.player.Str,
        Con: this.player.Con,
        Dex: this.player.Dex,
        Int: this.player.Int,
        Wis: this.player.Wis,
        Cha: this.player.Cha
    });


    console.log($scope.newteam);
  };


  $scope.newteam = [];


  $scope.players = [
    {
      name : "F. Dixon",
      college: "Florida State",
      position: "QB",
      Str : 14,
      Con: 15,
      Dex:  12,
      Int : 15,
      Wis : 10,
      Cha: 15

    },
    {
      name : "B. Morgan",
      college: "Michigan",
      position: "QB",
      Str : 17,
      Con: 15,
      Dex:  12,
      Int : 12,
      Wis : 10,
      Cha: 18

    },
    {
      name : "C. Matthews",
      college: "USC",
      position: "QB",
      Str : 18,
      Con : 15,
      Dex :  10,
      Int : 15,
      Wis : 10,
      Cha : 10

    },
    {
      name : "A. Dobson",
      college: "Mississippi St",
      position: "QB",
      Str : 16,
      Con: 15,
      Dex:  19,
      Int : 13,
      Wis : 10,
      Cha: 16


    }

  ];


}]);
