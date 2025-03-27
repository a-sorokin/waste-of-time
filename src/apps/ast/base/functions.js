export function equals(arg1, arg2) {
  return arg1 == arg2;
}

export function not() {
  return arguments[0] ? false : true;
}

export function add(...params) {
  return params[1] + params[2];
}
