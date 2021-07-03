import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service cart;
  get items() {
    return this.cart.getCartItems();
  }
  get subTotal() {
    return this.cart.getTotal();
  }
  get deliveryCharge() {
    return 0.005 * this.subTotal;
  }
  get total() {
    return this.subTotal + this.deliveryCharge;
  }
}
