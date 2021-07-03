import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
var flag;
export default class CartService extends Service {
  cartItems = A([]);
  @tracked cart_count = 0;
  @tracked cart_total = 0;

  @action
  add_item(item) {
    this.cart_count += 1;
    this.cart_total += item.currentPrice;
    // // incrementing count of item when same item is added multiple times
    if (this.cartItems.length == 0) {
      this.cartItems.pushObject(item);

      this.cartItems[0].count++;
    } else {
      flag = -1;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          flag = i;
          break;
        }
      }

      if (flag != -1) {
        this.cartItems[flag].count++;
      } else {
        item.count++;
        this.cartItems.pushObject(item);
      }
    }

    // console.log(this.cartItems);
    console.log(this.cart_count);
    // console.log(this.cart_total);
  }

  @action
  remove_item(item_id) {
    // console.log(item_id);
    for (let i = 0; i < this.cartItems.length; i++) {
      if (item_id == this.cartItems[i].id) {
        this.cart_total -= this.cartItems[i].currentPrice;
        if (this.cartItems[i].count > 1) {
          this.cartItems[i].count--;
        } else {
          this.cartItems[i].count--;
          this.cartItems.removeObject(this.cartItems[i]);
        }
        // console.log(this.cartItems[i].count);
      }
    }
    this.cart_count -= 1;
  }

  getCartItems() {
    return this.cartItems;
  }
  getTotal() {
    return this.cart_total;
  }
}
