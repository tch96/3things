import { Meteor } from 'meteor/meteor';
import '../imports/api/fooditems.js';
import '../imports/api/messages.js';
import '../imports/api/pixels.js';
import {
    fooditems
} from '../imports/api/fooditems.js';
import { vidFav } from '../imports/api/messages.js';

import { Email } from 'meteor/email';

var curtime = 0;
setInterval(function() {
    curtime += 1;
    if(curtime > 235){
      curtime = 0;
    }
}, 1000);

var vidSrc = ['Pikachu.mp4', 'RickMorty.mp4', 'Unicorn.mp4'];
var vidLeng = {'Pikachu.mp4':211, 'RickMorty.mp4':294, 'Unicorn.mp4':225};
var vidSrc1 = 'Pikachu.mp4', vidSrc2 = 'RickMorty.mp4', vidSrc3 = 'Unicorn.mp4';
var vidLeng1 = vidLeng[vidSrc1], vidLeng2 = vidLeng[vidSrc2], vidLeng3 = vidLeng[vidSrc3];

var curtimeVid1 = 0, curtimeVid2 = 0, curtimeVid3 = 0;
setInterval(function() {
    curtimeVid1 += 1;
    if (curtimeVid1 > vidLeng1) {
      pickNextVid(1);
      curtimeVid1 = 0;
    }
    curtimeVid2 += 1;
    if (curtimeVid2 > vidLeng2) {
      pickNextVid(2);
      curtimeVid2 = 0;
    }
    curtimeVid3 += 1;
    if (curtimeVid3 > vidLeng3) {
      pickNextVid(3);
      curtimeVid3 = 0;
    }
}, 1000);

function pickNextVid(num) {
  var tempVidSrc = vidSrc.slice();

  switch (num) {
    case 1:
        var index = vidSrc.indexOf(vidSrc1);
        if (index > -1) {
          tempVidSrc.splice(index,1);
        }
        vidSrc1 = tempVidSrc[Math.floor(Math.random()*tempVidSrc.length)];
        vidLeng1 = vidLeng[vidSrc1];
        break;

    case 2:
        var index = vidSrc.indexOf(vidSrc2);
        if (index > -1) {
          tempVidSrc.splice(index,1);
        }
        vidSrc2 = tempVidSrc[Math.floor(Math.random()*tempVidSrc.length)];
        vidLeng2 = vidLeng[vidSrc2];
        break;

    case 3:
        var index = vidSrc.indexOf(vidSrc3);
        if (index > -1) {
          tempVidSrc.splice(index,1);
        }
        vidSrc3 = tempVidSrc[Math.floor(Math.random()*tempVidSrc.length)];
        vidLeng3 = vidLeng[vidSrc3];
        break;
  }

}

Meteor.methods({
  sendEmail(to, from, subject, text) {
    // Make sure that all arguments are strings.
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();
    Email.send({ to, from, subject, text });
  },
  'get3foods' (){
    return fooditems.aggregate({
                    $sample: {
                        size: 3
                    }
                });
  },
  timeofsong(){
  	return curtime;
  },
  getVid1() {
    var info = {src:vidSrc1, time:curtimeVid1};
    return info;
  },
  getVid2() {
    var info = {src:vidSrc2, time:curtimeVid2};
    return info;
  },
  getVid3() {
    var info = {src:vidSrc3, time:curtimeVid3};
    return info;
  },
  'favoriteVid'(curRoom){
    switch(curRoom){
      case 1:
      vidFav.update({
        video:vidSrc1,
        user: Meteor.userId()
      },{
        video:vidSrc1,
        user: Meteor.userId()
      },
      {
        upsert: true
      });    
      break;
      case 2:
      vidFav.update({
        video:vidSrc2,
        user: Meteor.userId()
      },{
        video:vidSrc2,
        user: Meteor.userId()
      },
      {
        upsert: true
      });    
      break;
      case 3:
      vidFav.update({
        video:vidSrc3,
        user: Meteor.userId()
      },{
        video:vidSrc3,
        user: Meteor.userId()
      },
      {
        upsert: true
      });    
      break;
      default:
      break;
    }
  }
});

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = "smtps://postmaster%40sandbox02aa77513abf48d7b8145ec0b38dedb7.mailgun.org:822a485c348ee9e2933784658cbdafe5@smtp.mailgun.org:465";


});
