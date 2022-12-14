import EmberRouter from '@ember/routing/router';
import config from 'border-radius-previewer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('examples');
  this.route('circle-examples');
});
