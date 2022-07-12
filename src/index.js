


exports.min = function min(array) {
  let res = 0;
  if (!Array.isArray(array) || array.length === 0) {
    // console.log(0);
    return 0;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < res) {
      res = array[i];
    }
  }
  return res;
//   console.log(res);
}

exports.max = function max (array) {
  let res = 0;
  if (!Array.isArray(array) || array.length === 0) {
    // console.log(0);
    return 0;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > res) {
      res = array[i];
    }
  }
  return res;
//   console.log(res);

}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  } 
  let res = array.reduce((acc,el) => acc + el) / array.length;
  return res;

}

