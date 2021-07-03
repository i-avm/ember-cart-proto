import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';

class CartComponent extends Component {
  @service cart;
  @action
  addItem(item) {
    this.cart.add_item(item);
  }
}

export default CartComponent;
