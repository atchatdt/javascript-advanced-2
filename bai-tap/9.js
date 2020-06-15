function ArrayBoolean() {
  if ([] == true && [1] == true) return [true, true];
  else if ([] == true && [1] == false) return [true, false];
  else if ([] == false && [1] == true) return [false, true];
  else return [false, false];
}
console.log(ArrayBoolean())