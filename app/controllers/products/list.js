import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import { tracked } from '@glimmer/tracking';

export default class ListController extends Controller {
  @service productStore;

  get products() {
    return this.productStore.fetchProducts();
  }
}
