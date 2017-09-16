var test = function() {
  var button = document.getElementById("getNews");

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

  var buttonPresent = function() {
    testIfTrue(button);
    console.log("getNews Button");
  };

  var runTests = function() {
    buttonPresent();
  };

  runTests();
};

test();
