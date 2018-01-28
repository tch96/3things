import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './chat.html';
import { messages1 } from '../../api/messages.js';
import { messages2 } from '../../api/messages.js';
import { messages3 } from '../../api/messages.js';

import { Session } from 'meteor/session'

class chatCtrl {

  constructor($scope) {
    $scope.viewModel(this);
    
    this.helpers({
      messages() {
        var currentRoom = Session.get('currentRoom');
        switch(currentRoom){
          case 1:
          return messages1.find({});
          break;
          case 2:
          return messages2.find({});
          break;
          case 3:
          return messages3.find({});
          break;
          default:
          break;
        }
      }
    })
  }

  addMsg(newMsg) {
    // Insert a task into the collection
    if (!Meteor.userId()) {
            alert("You need to log in to do this.");
            throw new Meteor.Error('not-authorized');
        }
    if(newMsg.trim() == ''){
      return;
    }    
    var currentRoom = Session.get('currentRoom');
    switch(currentRoom){
      case 1:
      messages1.insert({
        text:newMsg,
        user: Meteor.user().username,
        createdAt: new Date
      });
      break;
      case 2:
      messages2.insert({
        text:newMsg,
        user: Meteor.user().username,
        createdAt: new Date
      });
      break;
      case 3:
      messages3.insert({
        text:newMsg,
        user: Meteor.user().username,
        createdAt: new Date
      });
      break;
      default:
      break;
    }

    // Clear form
    this.newMsg = '';
  }

}

export default angular.module('chat', [
  angularMeteor
  ])
.component('chat', {
  templateUrl: 'imports/components/chat/chat.html',
  controller: ['$scope', chatCtrl]
});