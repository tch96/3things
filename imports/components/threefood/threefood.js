import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './threefood.html';
import {
    fooditems
} from '../../api/fooditems.js';
import {
    foodorders
} from '../../api/fooditems.js';
var food3;
class threefoodCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        this.confirmview = false;
        this.helpers({
            foods() {
                Meteor.call("get3foods", function(error, result) {
                    food3 = result;
                });
                return fooditems.find({}, {
                    limit: 3
                });
            },
            foodorders() {
                return foodorders.find({
                    user: Meteor.userId()
                });
            }
        })
    }
    suggest3() {
        this.confirmview = false;
        Meteor.call("get3foods", function(error, result) {
            food3 = result;
        });
        if (food3 != null) {
            this.foods = food3;
        }
    }
    foodChosen(food) {
        this.confirmview = true;
        this.foodchose = food;
        if (!Meteor.userId()) {
            alert("You need to log in to do this.");
            throw new Meteor.Error('not-authorized');
        }
        this.phone = Meteor.user().profile.phone;
        this.city = Meteor.user().profile.city;
        this.state = Meteor.user().profile.state;
        this.zipcode = Meteor.user().profile.zipcode;
        this.streetAd = Meteor.user().profile.streetAddress;
    }
    showConfirm() {
        return this.confirmview;
    }
    makeOrder() {
        if (!Meteor.userId()) {
            alert("You need to log in to do this.");
            throw new Meteor.Error('not-authorized');
        }
        var newAddress = {
            phone: this.phone,
            city: this.city,
            state: this.state,
            zipcode: this.zipcode,
            streetAddress: this.streetAd
        };
        Meteor.users.update(Meteor.userId(), {
            $set: {
                profile: newAddress
            }
        });
        var timeoforder = new Date();
        var timeString = timeoforder.toString();
        foodorders.insert({
            text: this.foodchose.name,
            user: Meteor.userId(),
            createdAt: timeString
        });
        var emailcontent = 'Order of ' + this.foodchose.name + ' to ' + this.streetAd + ',' + this.city + ',' + this.state + ',' + this.zipcode + '. Contact: ' + this.phone + '. Name: ' + Meteor.user().username;
        Meteor.call('sendEmail', this.foodchose.email, Meteor.user().username + '<do.huyd@gmail.com>', 'New order', emailcontent);
        this.confirmview = false;
        alert("We emailed the restaurant about your order.");
    }
}
export default angular.module('threefood', [
    angularMeteor
]).component('threefood', {
    templateUrl: 'imports/components/threefood/threefood.html',
    controller: ['$scope', threefoodCtrl]
});