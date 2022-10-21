import EmberRouter from '@ember/routing/router';
import config from 'ember-cart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products', function () {
    this.route('list');
    this.route('details', { path: ':product_id/details' });
  });
  this.route('cart', { path: 'shopping-cart' });
  this.route('cards', { path: 'view-cards' });

  // common
  this.route('page-not-found', { path: '/*path' });
});
