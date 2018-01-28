import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './actions.html';
import { Session } from 'meteor/session'

class actionsCtrl {
  pauseVids() {
    video1.pause();
    video2.pause();
    video3.pause();
  }
  pauseAudio() {
    song.pause();
  }
  tuneIn() {
    Meteor.call("timeofsong",function(error,result){
  	song.currentTime = result;
  	song.play();
  	});
  }
  playCurVid() {
    var currentRoom = Session.get('currentRoom');
    switch (currentRoom) {
      case 1:
        Meteor.call('getVid1', function (error,result) {
          video1.src = result.src;
          video1.currentTime = result.time;
          video1.play();
        });
        break;
      case 2:
        Meteor.call('getVid2', function (error,result) {
          video2.src = result.src;
          video2.currentTime = result.time;
          video2.play();
        });
        break;
      case 3:
        Meteor.call('getVid3', function (error,result) {
          video3.src = result.src;
          video3.currentTime = result.time;
          video3.play();
        });
        break;

      default:
        console.log('no room');
      break;

    }
  }
}

export default angular.module('actions', [
  angularMeteor
])
  .component('actions', {
    templateUrl: 'imports/components/actions/actions.html',
    controller: ['$scope', actionsCtrl]

      });
