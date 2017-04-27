var assert = {
  isTrue: function(assertionCheck) {
    if(!assertionCheck) {
      throw new Error("Assertion failed: " + assertionCheck + " is not truthy");
    }
  }
};
