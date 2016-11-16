import angular from 'angular';
var Raven = require('raven-js');
import '../style/app.css';

Raven
  .config('https://7a852c96ff0d4600938c724153f0bc2a@sentry.io/107523')
  .addPlugin(require('raven-js/plugins/angular'), angular)
  .install();

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRaven'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrll)

export default MODULE_NAME;
