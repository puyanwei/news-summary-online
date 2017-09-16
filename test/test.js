var pass = function() {
  console.log("%cTest passed", "color:green");
};

var fail = function() {
  console.log("%cTest failed", "color:red");
};

var testIfTrue = function(argument) {
  if (argument) {
    pass();
  } else {
    fail();
  }
};
