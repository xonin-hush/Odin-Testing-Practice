function calculator(operation, a, b) {
  if (operation == "add") {
    return addition(a, b);
  } else {
    if (operation == "sub") {
      return subtraction(a, b);
    } else {
      if (operation == "div") {
        return division(a, b);
      } else {
        return multiplication(a, b);
      }
    }
  }
  function addition(a, b) {
    return (a + b);
  }
  function subtraction(a, b) {
    return (a - b);
  }
  function division(a, b) {
    if (b === 0) {
      alert("Can not divide by zero, YET.");
      return firstNumber;
    } else {
      return (a / b);
    }
  }
  function multiplication(a, b) {
    return (a * b);
  }
}
module.exports=calculator
calculator("sub", 2, 1);//1
calculator("mult",2,2);//4
calculator("add",3,2);//5
calculator("div",2,2)//1