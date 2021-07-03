import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class CartComponent extends Component {
  @service cart;
  @service productStore;
  @service('auth-user') authentication;

  @tracked isChecked = false;

  @action
  updateCheckedStatus() {
    console.log(this.isChecked);
    this.productStore.updateIsAvailable(!this.isChecked); // checked is working in opp manner.. so using `!`
  }

  @action
  logOut() {
    this.authentication.logOut();
  }
}

export default CartComponent;
