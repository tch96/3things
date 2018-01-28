import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './music.html';


class musicCtrl {
  mute() {
    $('#song').prop('muted', !$('#song').prop('muted'));
  }
}

export default angular.module('music', [
  angularMeteor
])
  .component('music', {
    templateUrl: 'imports/components/music/music.html',
    controller: ['$scope', musicCtrl]
  });
