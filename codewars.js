// 1. Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length);
}

// 2. Powers of 2

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

// 3. All Star Code Challenge
function strCount(str, letter) {
  return str.split('').filter((l) => l === letter).length;
}

// 4. Cat years, Dog years

var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

// 5. Expressions Matter
function expressionMatter(a, b, c) {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}

// 6. What is between?
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

// 7. Filter out the geese
function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter((bird) => geese.find((el) => el === bird) === undefined);
}

// 8. Reverse List Order

function reverseList(list) {
  //   Method 1
  for (let i = list.length - 1, count = 0; i >= list.length / 2; i--) {
    let tmp = list[count];
    list[count] = list[i];
    list[i] = tmp;
    count++;
  }
  return list;

  //   Method 2
  //   return list.reverse()
}

// 9. Find Multiples of a Number

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}
