// Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length);
}

// Powers of 2

function powersOfTwo(n) {
  //   For Loop Method#1
  //   let arr = []
  //   for (let i = 0; i <= n; i++) {
  //     arr.push(2**i)
  //   }
  //   return arr

  //   Spread Syntax Method#2
  return [...Array(n + 1)].map((v, i) => 2 ** i);

  //   Array.from Method#3
  //   return Array.from({length: n+1}, (v, i) => 2**i)
}