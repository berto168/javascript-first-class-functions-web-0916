function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function test() {
    console.log("test")
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("test")
  };
}
