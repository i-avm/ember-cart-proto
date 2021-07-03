import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import items from '../models/e-cart-mock-data';

export default class ProductStoreService extends Service {
  @tracked isAvailableOnly = false;

  @action
  fetchProducts() {
    if (this.isAvailableOnly) {
      const filteredItems = items.filter((item) => {
        if (item.stocked) {
          return item;
        } else return null;
      });
      return filteredItems;
      //   console.log(items);
    } else {
      //   console.log('inside else');
      return items;
    }
  }

  @action
  fetchProduct(product_id) {
    const productItem = items.filter((item) => {
      if (item.id == product_id) {
        return item;
      } else return null;
    });
    console.log(productItem);
    return productItem;
  }

  @action
  updateIsAvailable(value) {
    // console.log(value);
    this.isAvailableOnly = value;
  }
}
