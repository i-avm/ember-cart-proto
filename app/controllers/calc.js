import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalcController extends Controller {
  @tracked count = 0;
  @tracked multiple = 1;

  @action
  increment() {
    this.count++;
  }

  @action
  multiply() {
    this.multiple *= 2;
  }

  get total() {
    return this.count + this.multiple;
  }
}
