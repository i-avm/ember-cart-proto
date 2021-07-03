import EmberRouter from '@ember/routing/router';
import config from 'e-cart-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  //* E cart App
  this.route('products', function () {
    this.route('list');
    this.route('details', { path: ':product_id/details' });
  });
  this.route('cart', { path: 'shopping-cart' });
  //*

  this.route('footballers');
  this.route('cricketers');
  this.route('cards', { path: 'view-cards' });

  //* chat
  this.route('chat-app');

  //* Others
  this.route('calc');
  this.route('page-not-found', { path: '/*path' });
});
