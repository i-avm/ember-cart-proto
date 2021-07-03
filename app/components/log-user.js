import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class LogUserComponent extends Component {
  @service('auth-user') authentication;
  //   @tracked userName;
  //   @tracked password;

  @action
  authenticateUser() {
    this.authentication.authenticateUser();
  }

  @action
  createUser() {
    this.authentication.createUser();
  }
}

export default LogUserComponent;
