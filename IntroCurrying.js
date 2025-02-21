//Introduction to Currying and Partial Application

function add(a) {
    return function(b) {
      return a + b;
    };
  }

  const addFive = add(5);
  console.log(addFive(3)); // Output: 8


  // Next
  function multiply(a, b) {
    return a * b;
  }

  const double = multiply.bind(null, 2);
  console.log(double(5)); // Output: 10
