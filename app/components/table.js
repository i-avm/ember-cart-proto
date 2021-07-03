import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class TableComponent extends Component {
  @service cart;
  @action
  removeItem(item) {
    if (confirm('Remove item !?')) this.cart.remove_item(item.id);
  }

  @action
  addItem(item) {
    this.cart.add_item(item);
  }
}

export default TableComponent;
