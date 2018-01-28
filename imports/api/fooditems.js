import { Mongo } from 'meteor/mongo';
 
export const fooditems = new Mongo.Collection('fooditems');
export const foodorders = new Mongo.Collection('foodorders');

