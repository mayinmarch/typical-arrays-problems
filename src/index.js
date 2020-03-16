
exports.min = function min (array) {
  if (array === undefined || array.length === 0){
    return 0;
  }
  let minimum = array[0];
  array.forEach(element => {
    if(minimum > element){
      minimum = element;
    }
  });
  return minimum;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0){
    return 0;
  }
  let maximum = array[0];
  array.forEach(element => {
    if (maximum < element){
      maximum = element;
    }
  });
  return maximum;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0){
    return 0;
  }
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length;
}
