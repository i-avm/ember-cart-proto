import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

const users = A([
  {
    uName: 'aby',
    pw: 'aby',
  },
  {
    uName: 'admin',
    pw: 'admin',
  },
]);

export default class AuthUserService extends Service {
  @tracked userName;
  @tracked password;
  @tracked authStatus=true; //! Set to false after test is done

  @action
  authenticateUser() {
    // console.log('inside service', this.userName);
    let flag = false;
    for (let i = 0; i < users.length; i++) {
      if (this.userName == users[i].uName && this.password == users[i].pw) {
        flag = true;
      }
    }
    if (flag) {
      this.authStatus = true;
    } else alert('invalid credentials');
  }

  @action
  createUser() {
    users.pushObject({
      uName: this.userName,
      pw: this.password,
    });
    alert("Succesfully Registered!")
  }

  @action
  logOut() {
    if (confirm('Log Out !! Are you Sure ??')) this.authStatus = false;
  }
}
