import { helper } from '@ember/component/helper';

function increment(value) {
  let inc = parseInt(value) + 1;
  return inc;
}

export default helper(increment);
