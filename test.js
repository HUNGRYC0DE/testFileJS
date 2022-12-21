function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }

  console.log(answer);

}
// switchOfStuff('a');
/**************************************************************************************************************************************************************************************************************/
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  console.log(answer);
}
// sequentialSizes(5);
/**************************************************************************************************************************************************************************************************************/
function sadge(str) {
  if (str.length >= 2) {
    let a = str.substring(str.length - 2);
    return a.repeat(4)
  }
  else
    return str
}
// console.log(sadge("a"))
// console.log(sadge("javascript"))
// console.log(sadge("mohammad"))
/**************************************************************************************************************************************************************************************************************/
function front_back(str) {
  last = str.slice(-1)
  return last + str + last
}
// console.log(front_back('red'))
// console.log(front_back('ab'))
// console.log(front_back('abs'))
/**************************************************************************************************************************************************************************************************************/
function sadg(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true
  }
  else
    return false

}

// console.log(sadg(3))
// console.log(sadg(14))
// console.log(sadg(12))
// console.log(sadg(37))
/**************************************************************************************************************************************************************************************************************/
// Setup : Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.   {{ Remember that undefined is a keyword, not a string. }}
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// console.log(abTest(2, 2))
/**************************************************************************************************************************************************************************************************************/
/* In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by
 keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below.
 When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. */
let count = 0;
function cc(card) {
  for (let i = 0; i <= card.length; i ++){
  switch (card[i]) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
}
  if (count > 0) {
    console.log(count + " Bet")
  }
  else {
    console.log(count + " Hold")
  }
}
cc([2,4,5,7,'A'])
/**************************************************************************************************************************************************************************************************************/
const person = {
  name: "sag",
  age: 5
}
let sag = [person, person, person]
sag[1].age = 10;
// console.log(sag[0])
/**************************************************************************************************************************************************************************************************************/
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))
/**************************************************************************************************************************************************************************************************************/
let a = 0;
let b = 10;
a = ++b;
// console.log(a, b)
/**************************************************************************************************************************************************************************************************************/
let myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// console.log(myArray)
/**************************************************************************************************************************************************************************************************************/
let arr = [10, 9, 8, 7, 6,];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
/**************************************************************************************************************************************************************************************************************/
arr = [
  [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // console.log(arr[i][j]);
  }
}
/**************************************************************************************************************************************************************************************************************/
let myArr = [2, 3, 4, 5, 6];
let total = 0;
for (i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total)
/**************************************************************************************************************************************************************************************************************/
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1, 5], [2, 2], [3]]))
/**************************************************************************************************************************************************************************************************************/
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([2, 3, 4, 5], 3))
/**************************************************************************************************************************************************************************************************************/
let myAr = [];
let myNum = [[77, 45], [99, 13]];
let myStr = ["mamad", "sajjad"];
function test(myNum, str) {
  for (let i = 0; i == myNum.length; i++) {
    myAr = myNum[i].push(str[i]);
  }
}
console.log(myAr)
/**************************************************************************************************************************************************************************************************************/
function gholi(num1, num2) {
  if (num1 >= 100 && num2 < 0 || num2 >= 100 && num1 < 0) {
    return true
  }
  else {
    return false
  }
}
console.log(gholi(1, 120))
/**************************************************************************************************************************************************************************************************************/
function gholi2(num1, num2) {
  if ((num1 < 200 && num1 > 100) && (100 < num2 && num2 < 200)) {
    return true
  }
  else {
    return false
  }
}
console.log(gholi2(101, 150))
/**************************************************************************************************************************************************************************************************************/
function gholi3(num1, num2, num3) {
  if ((19 < num1 && num1 < 51) || (20 <= num2 && num2 <= 50) || (20 <= num3 && num3 <= 50)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(gholi3(10, 20, 200))
/**************************************************************************************************************************************************************************************************************/
for (let i = 1; i < 6; i++) {
  console.log("* ".repeat(i));
}
/**************************************************************************************************************************************************************************************************************/
for (let i = 5; i > 0; i--) {
  console.log("* ".repeat(i));
}
/**************************************************************************************************************************************************************************************************************/
let bogh = [23, 24, 26, 27, 30];
a = bogh[0];
for (let i = 0; i < bogh.length; i++) {
  if (a != bogh[i]) {
    console.log(a)
    a++
  }
  a++
}
/**************************************************************************************************************************************************************************************************************/
let arry_one = ['ali', 'david', 85, 113, 'really']
let arry_two = ['ali', '55', 85, 15, 21, 113]
for (i = 0; i <= arry_one.length; i++) {
  for (let j = 0; j < arry_two.length; j++) {
    if (arry_one[i] === arry_two[j]) {
      console.log(arry_one[i])
    }
  }
}
/***************************************************************************************************************************************************************************/
function random(numbers) {
  let numbersLength = numbers.length;
  let random = [];
  let a = 0;
  while (numbersLength--) {
    a = Math.floor(Math.random(0) * (numbersLength + 1));
    random.push(numbers[a]);
    numbers.splice(a, 1);
  }
  console.log(random)
}
random([1, 2, 3, 45, 5, 65, 84, 2])
/***************************************************************************************************************************************************************************/
let name = ['sajjad', 'parsa', 'parsa', 'amir', 'sajjad', 'mohammd', 'farbord', 'amir', 'farbord']

function remove(name) {
  return name.filter((a, b) =>
    name.indexOf(a) === b)
}
console.log(remove(name))
/***************************************************************************************************************************************************************************/
function baraxs(str) {
  let a = []
  for (let i = str.length; i >= 0; i--) {
    a.push(str[i])
  }
  return a.join('');
}
console.log(baraxs("mohsen khar ast"))
/***************************************************************************************************************************************************************************/
function fibo(num) {
  var num1 = 0;
  var num2 = 1;
  var sum;
  console.log(0)
  for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(num2)
  }
}
// fibo(5)
/***************************************************************************************************************************************************************************/
function aybaba(num) {
  if (Number.isFinite(num)) { // or   if (typeof myVar === 'number')
    num = Math.floor(num)
    num = num.toString()
    console.log(num.length)
  }
}
aybaba(111591.256)
/****************************************************************************************************************************************************************************/
function aybaba2(n) {
  let a = 0
  if (n >= 1) {
    ++a;
    while (n / 10 >= 1) {
      n /= 10
      ++a
    }
  }
  console.log(a)
}
aybaba2("128.320")
/****************************************************************************************************************************************************************************/
let arr2 = [1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6, 8, 8, 8, 7, 7, 7, 1, 0, 0, 9, 9, 9, 9, 10, 10, 10, 10,]
const sadge1 = (arr2 = []) => {
  const count = {};
  const max = arr2.reduce((acc, val, ind) => {
    count[val] = (count[val] || 0) + 1
    if (!ind || count[val] > count[acc[0]]) {
      return [val]
    };
    if (val !== acc[0] && count[val] === count[acc[0]]) {
      acc.push(val)
    };
    return acc
  }, undefined)
  return {
    max, count
  };
}
console.log(sadge1(arr2))
/***************************************************************************************************************************************************************************/
function sadg2(num) {
  let a;
  let sL = {
    num: {},
    max: []
  }
  let n = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        a = num[i]
        num[i] = num[j]
        num[j] = a
      }
    }
  }
  let b = num[0]
  for (i = 0; i <= num.length - 1; i++) {
    if (num[i] == b) {
      n++
      sL.num[b] = n
    }
    else {
      b = num[i]
      n = 1
      sL.num[b] = 1
    }
  }
  let c = Object.values(sL.num)
  let e = Object.keys(sL.num)
  let f  = Math.max(...c)
  let d = e.length
  sL.max.push("["+ f +"]")
  for (i = 0; i <= d; i++) {
    if (c[i] == f) {
      sL.max.push(parseFloat(e[i]))
    }
  }
  console.log(sL)
}
sadg2([5, 17, 26, 49, 47, 8, 3, 31, 25, 46, 26, 37, 32, 22, 36, 7, 20, 48, 25, 28, 5, 24, 22, 38, 27, 10, 47, 10, 30, 38, 27, 32, 48, 13, 17, 3, 8, 6, 37, 18, 45, 1, 10, 26, 12, 20, 38, 10, 12, 29, 8, 35, 22, 38, 48, 36, 37, 5, 16, 43, 38, 27, 27, 8, 46, 3, 15, 50, 24, 27, 24, 6, 18, 35, 37, 48, 10, 12, 20, 24, 31, 15, 35, 11, 23, 46, 40, 6, 17, 1, 25, 48, 45, 39, 35, 5, 17, 11, 46, 5])
/***************************************************************************************************************************************************************************/
function ziad3(arr) {
  let a;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        a = arr[i]
        arr[i] = arr[j]
        arr[j] = a
      }
    }
  }
  console.log(arr)
}
// ziad3([1, 2, 3, -1, -2, -3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15])
/***************************************************************************************************************************************************************************/
function piaz(str) {
  console.log(str)
  let a;
  let b;
  let c;
  let h = 0;
  let all = [];
  if (str[0].length === str[1].length) {
    a = str[0].split('')
    b = str[1].split('')
    for (let i = 0; i <= a.length; i++) {
      if (a[i] !== b[i]) {
        c = a[i]
        a[i] = b[i]
        b[i] = c
        h++
      }
    }
    all.push(a.toString().replace(/,/g, ""))
    all.push(b.toString().replace(/,/g, ""))
    console.log(h)
    console.log(all)
  }
}
piaz(['herbid', 'farbod'])
/***************************************************************************************************************************************************************************/
function parsa(a) {
  let day = 0
  let top = 0
  while (top < a) {
    day++
    top += 7
    if (top >= a) {
      break
    }
    top -= 2
  }
  console.log(day)
}
parsa(124)
/***************************************************************************************************************************************************************************/