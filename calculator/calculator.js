function calculator(operation, a, b) {

    if (operation == "add") {
      console.log(addition(a, b));
    } else {
      if (operation == "sub") {
        console.log(subtraction(a, b));
      } else {
        if (operation == "div") {
          console.log(division(a, b));
        } else {
          console.log(multiplication(a, b));
        }
      }
    }
    function addition(a, b) {
      return (sum = a + b);
    }
    function subtraction(a, b) {
      return (sub = a - b);
    }
    function division(a, b) {
      if (b === 0) {
        alert("Can not divide by zero, YET.");
        return firstNumber;
      } else {
        return (product = a / b);
      }
    }
    function multiplication(a, b) {
      return (product = a * b);
    }
  }
  calculator("sub",2,1)
  