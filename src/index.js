
exports.min = function min (array) {
  if (array == null || array.length == 0)
    return 0;
  let minValue = array[0];
  for(let i=1; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue < minValue ) {
      minValue = currentValue;
    }
  }
  return minValue;
}

exports.max = function max (array) {
  if (array == null || array.length == 0)
    return 0;
  let maxValue = array[0];
  for(let i=1; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue > maxValue ) {
      maxValue = currentValue;
    }
  }
  return maxValue;
}

exports.avg = function avg (array) {
  if (array == null || array.length == 0)
    return 0;
  let total = 0;
  for ( let i = 0; i < array.length; i++) {
    total += array[i];
  }
  let avgValue = total / array.length
  return avgValue;
}
