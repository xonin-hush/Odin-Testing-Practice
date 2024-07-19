function analyzeArray(array) {
  let length = array.length;
  let minValue = Math.min(...array);
  let maxValue = Math.max(...array);
  let sum = 0;
  for (let i in array) {
    sum = sum + array[i];
  }
  let average = sum / length;
  function object() {
    this.average = average;
    this.min = minValue;
    this.max = maxValue;
    this.length1 = length;
  }
  console.log(new object());
}
analyzeArray([1, 8, 3, 4, 2, 6]);
