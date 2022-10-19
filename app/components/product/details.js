import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

class CartComponent extends Component {
  @service cart;
  @action
  addItem(item) {
    this.cart.add_item(item);
  }
}

export default CartComponent;
