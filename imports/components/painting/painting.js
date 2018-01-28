import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './painting.html';
import { pixels } from '../../api/pixels.js';

 
class paintingCtrl {

  constructor($scope) {
    $scope.viewModel(this);
    
    this.helpers({
      pixels() {
        return pixels.find({});
      }
    });
  }
  changeColor(pixel,currentColor){
    if(currentColor == null){
      currentColor = 'black';
    }
    pixels.update(pixel._id,
      {$set:{color:currentColor}});
  }

}
 
export default angular.module('painting', [
  angularMeteor
])
  .component('painting', {
    templateUrl: 'imports/components/painting/painting.html',
    controller: ['$scope', paintingCtrl]
  });