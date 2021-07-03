import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DetailsController extends Controller {
  @service cart;
  @action
  add_item(item) {
    this.cart.add_item(item);
  }
}
