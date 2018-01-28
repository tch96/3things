import angular from 'angular';
import angularMeteor from 'angular-meteor';
import actions from '../imports/components/actions/actions';
import threefood from '../imports/components/threefood/threefood';
import music from '../imports/components/music/music';
import chat from '../imports/components/chat/chat';
import painting from '../imports/components/painting/painting';
import watch from '../imports/components/watch/watch';

import '../imports/startup/accounts-config.js';

angular.module('trizone', [
  angularMeteor,
  actions.name,
  threefood.name,
  music.name,
  chat.name,
  painting.name,
  watch.name,
  'accounts.ui'
]);
