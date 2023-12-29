import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-заказ-фото-l');
  this.route('i-i-s-prilozhenie-заказ-фото-e',
  { path: 'i-i-s-prilozhenie-заказ-фото-e/:id' });
  this.route('i-i-s-prilozhenie-заказ-фото-e.new',
  { path: 'i-i-s-prilozhenie-заказ-фото-e/new' });
  this.route('i-i-s-prilozhenie-услуги-l');
  this.route('i-i-s-prilozhenie-услуги-e',
  { path: 'i-i-s-prilozhenie-услуги-e/:id' });
  this.route('i-i-s-prilozhenie-услуги-e.new',
  { path: 'i-i-s-prilozhenie-услуги-e/new' });
});

export default Router;
