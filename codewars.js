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

// 10. Sum the Strings

function sumStr(a, b) {
  if (a === '' && b === '') return '0';
  if (a === '' || b === '') return a || b;
  return +a + +b + '';
}

// 11. Is it a palindrome?

function isPalindrome(x) {
  return x.toLowerCase() == x.split('').reverse().join('').toLowerCase()
    ? true
    : false;
}

// 12. Merge two sorted arrays

function mergeArrays(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr.includes(arr2[j])) continue;
    arr.push(arr2[j]);
  }
  return arr.sort((a, b) => a - b);
}

// 13. A wolf in sheep's clothing

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf')
    return 'Pls go away and stop eating my sheep';

  //   Create a count variable to count how many times it take to find a wolf
  //   then break for loop
  //   return count with the string
  //   let count = 0;
  //   for (let i = queue.length - 1; i >= 0; i--) {
  //     if (queue[i] === 'wolf') break
  //     count++;
  //   }
  //   return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`

  //  Get Length of array then subtract the 1 from it and subtract again from the index of the wolf.
  return `Oi! Sheep number ${
    queue.length - 1 - queue.indexOf('wolf')
  }! You are about to be eaten by a wolf!`;
}

// 14. What's the real floor?

function getRealFloor(n) {
  return n > 13 ? n - 2 : n <= 0 ? n : n - 1;
}

// 15. I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  return [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ][(nbPetals - 1) % 6];
}

// 16. Find number which are divisable by the given number

function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor == 0);
}

// 16. Well of Ideas - Easy Version

function well(x) {
  const lenArr = x.filter((idea) => idea === 'good').length;
  if (lenArr > 2) return 'I smell a series!';
  if (lenArr >= 1) return 'Publish!';
  return 'Fail!';
}
// 18. Sum of the lowest two integers
function sumTwoSmallestNumbers(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// 19. Drink About
const peopleWithAgeDrink = (old) =>
  old < 14
    ? 'drink toddy'
    : old < 18
    ? 'drink coke'
    : old < 21
    ? 'drink beer'
    : 'drink whisky';
// 20. Plural
function plural(n) {
  return n != 1 ? true : false;
}
