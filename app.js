// Hi. This Is a Test APP

/*
var = zarf moteghayer
    var a;
    a = 20;

var myVar;
myVar = 5;
var myNum;
myNum = myVar;
    var a;
    a = 7;
    var b;
    b = a;

var myVar = 0;
    var a = 9;

var myName = "your name"; {string ya kalame ezaf mikonim}
    var myFirstName = "mohammad";
    var myLastName = "gholami";

****    var yek moteghayer ast k mitavan meghdar an ra bar ha taghyer dad.  ****
****    baraye estefade az moteghaye ha ba meghdar sabet az "const estefade mikonim"  ****
****    const myFirstName = "mohammad";
****    const myLastName = "gholami";
****    let myWork = "developer";
****    myWork = "superi";
****    var myAge = 26;
****    var myAgeNextYear = 27;
****    myAge = myAgeNextYear;
 
    % baraye be dast avardan baghi mande estefade mishavad

*/

//**********************************************************************************************************************************************************
const myNmae = "Mohammad";
const myLastname = "Gholami";
let myAge = "26";
console.log("I`m " + myNmae + " " + myLastname);
console.log("and i " + myAge + " yearsold.");
//**********************************************************************************************************************************************************
let myNumber = 50;
console.log(myNumber);
myNumber /= 10; // 50 bar 10 taghsim shode ast
console.log(myNumber); //print javab
myNumber *= 6; // 5 dar 6 zarb shode
console.log(myNumber); //print javab
myNumber += 30; // 30 + 30 shode
console.log(myNumber); //print javab
myNumber -= 10; // 60 - 10 shode
console.log(myNumber); //print javab
//**********************************************************************************************************************************************************
let myWoo = 'I am a "double quoted" string inside "double quotes".'; //baraye estefade az ' " dar jomle mibayest dar ghabl az anha \ gozasht.
console.log(myWoo);
myWoo = 'I am a "double quoted" string inside "double quotes".'; // az in ravesh niz mitavan estefade kard
console.log(myWoo);
//**********************************************************************************************************************************************************
/* 
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \t	tab
    \r	carriage return
    \b	word boundary
    \f	form feed
*/
//**********************************************************************************************************************************************************
myWoo = 'I am a \n\t"double quoted"\t string inside\n "double quotes".';
console.log(myWoo);
//**********************************************************************************************************************************************************
let myStr = "This is the first sentence.";
myStr += " " + "This is the second sentence."; // ye chiz jadid. mishe chante moteghayer b yek zarf ezafe kard.
console.log(myStr);
//**********************************************************************************************************************************************************
/* 
    const ourName = "freeCodeCamp";
    const ourStr = "Hello, our name is " + ourName + ", how are you?";
*******************************************************************************************************************
    const anAdjective = "awesome!";
    let ourStr = "freeCodeCamp is ";
    ourStr += anAdjective;
*/
//**********************************************************************************************************************************************************
// ba estefade az dastor .lenght tol yek string ra mitavanim moshakhas konim.
console.log("Alan Peter".length); // tol in string b andaze 10 space mibashad.
//**********************************************************************************************************************************************************
/* 
    const firstName = "Charles";
    const firstLetter = firstName[0]; inja avalin reshte ra baraye ma joda mikonad k haman c ast.

    const firstName = "Ada";
    const lastLetter = firstName[firstName.length - 1]; target kardan akharin harf k haman a ast.
*/
//**********************************************************************************************************************************************************
//  ARAYE
//**********************************************************************************************************************************************************
// ma mitavanim ba estefade az eelan araye b shekl zir az chand moteghayer estefade konim [namad araye]
const myLang = ["English", "Persian", "Spanish", "france"];
console.log(myLang);
myLang.pop(); // ba in dastor mitavanim az entehaye araye khod ye data kam konim.  ***********************************   AKHAR
myLang.push(["america", "lakers", "lebron"]); // ma hata mitavanim yek arayeye jadid b akhar arayeye khod ezaf konim.    AKHAR
myLang.unshift("afghani"); // ba in dastor b aval araye ye data jadid vared mikonim.  ********************************   AVAL
myLang[1] = "beyzoiek"; // meghdar araye ghabel taghir ast hata agar const bashad.
console.log(myLang);
//**********************************************************************************************************************************************************
// ma mitavanim araye dar araye niz gharar dahim manand in:
const teams = [
    ["Bulls", 23],
    ["White Sox", 45],
];
console.log(teams[0][1]); // be in shekl anhara seda mizanim. [23]
//**********************************************************************************************************************************************************
const myArray = [
    ["John", 23],
    ["cat", 2],
];
//**********************************************************************************************************************************************************
//ma  mitavanim ba estefade az dastor .pop() az akhar araye ye khod yek data kam konim ya b moteghayer digari ekhtesas dahim.
//ba estefade az dastor .shift() az aval araye yek data kam konim.
//**********************************************************************************************************************************************************
const removedFromMyArray = myArray.pop();
console.log(myArray[0]);
//**********************************************************************************************************************************************************
// tavabe
//**********************************************************************************************************************************************************
function Mohammad(param1,param2){                 // ****
    console.log("Hello", " World");      // **** dar inja ma yek tabee jadid ejad kardim
}                                    // ****
Mohammad()                           // **** dar inja in ra seda zade im,
//**********************************************************************************************************************************************************
function functionWithArgs(param1 = myNmae,param2 = "Gholami"){  // ma hamchenan mitavanim parametr haye b onvan
    console.log(param1 + " " + param2);                        // mahal negahdari moteghayer haye khod tarif konim.
  }
functionWithArgs()
//**********************************************************************************************************************************************************
const myNum = 10;
function timesFive(num) {
    const myNum = 1;                     // ma hamchenan mitavanim ye parametr ra baad az ejad taghyer dahim
    console.log(num * 5);               // hamchenan moteghayer haye mahali bar moteghayer haye koli olaviat darand.
}
timesFive(7)
console.log(myNum);           // dar in ja namitavanim moteghayeri k dar dakhel tabe tarif shode ra dar kharej az an seda bzanim.
//**********************************************************************************************************************************************************
function plusThree(num){                // ma ba estefade az dastor return mitavanim ye meghdara ra az tabee kharej konim
   return num + 3;
}
const answer = plusThree(27);          // hamchenan ma mitavanim yek khorojie yek tabe ra b yek moteghayer ekhtesas dahim
console.log(answer);
//**********************************************************************************************************************************************************
function addNum(par1 = 2,par2 = 0){
    return par1 + par2;
}
console.log(addNum(5,6)+100) 
//**********************************************************************************************************************************************************
// booleans : in yek noee dade ast k mitavanad faghat yeki az do hallat true ya false ra dashte bashad.
//**********************************************************************************************************************************************************
//  IF : dastor shart ya haman if. 
function test(myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
console.log(test(true)) 
console.log(test(false)) 
//**********************************************************************************************************************************************************
//amal kard barabari va daghigh ba ham motefavet ast
// == baraye barabari estefade mishavad k amal kard amaliat tabdil ra anjam midahad
// === amalkard daghigh baraye arzyabi beyn do dade mored estefade ast ba in tafovet k amaliad tabdil raa\ anjam namidahad.
// != baraye adam barabari estefad mishavad.
// !== adam barabari daghigh.
// > amal kard bozorgtar maghadir bein do adad ra moghayese mikonad.
// >= amal kard bozorgtar mosavi maghadir bein do adad ra moghayese mikonad.
// < amal kard kochaktar maghadir bein do adad ra moghayese mikonad.
// <= amal kard kochaktar mosavi maghadir bein do adad ra moghayese mikonad.
// Setup
function testStrict(val) {
    if (val === 7) { // ba == va === emtehan konid.
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testStrict(7))
  console.log(testStrict('7'))
//**********************************************************************************************************************************************************
//  typeof ba estefade az in dastor mitavanim noee dade hara bazbini konim.
console.log(typeof 3)
console.log(typeof '3')
//**********************************************************************************************************************************************************
// amalkard && baraye anjam chand azmayesh dar yek zaman estefade mishavad
/*
  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";
*/
// amalkard || baraye anjam yeki az amaliat ha estefade mishavad.yani ta jaye edame miabad ke yeki az dastorat in ejra shavad.
/*
  if (val <= 9 || val >= 21) {
    return "Outside";
  }
  return "Inside";
*/
//**********************************************************************************************************************************************************
// Else ba estefade az in dastor mitavanim barayr dargheyr in sorat estefade konim.
/*
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
*/
//**********************************************************************************************************************************************************
// else if ya dargheir in sorat agar ast. ma hamchenan mitavanim az chand dastor else if baad az if estefade konim.
/*
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
*/
//**********************************************************************************************************************************************************
//                                                                  Challeng
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1){
      return names[0];
    }
    else if(par >= strokes+2){
      return names[1];
    }
    else if(par == strokes+1){
      return names[2];
    }
    else if (par == strokes){
      return names[3];
    }
    else if (par == strokes-1){
      return names[4];
    }
    else if (par == strokes-2){
      return names[5];
    }
    else if (par <= strokes-3){
      return names[6];
    }
}
// console.log("golfScore " + golfScore(9,1))
//**********************************************************************************************************************************************************
/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/
// dastor switch
function caseInSwitch(val) {
  let answer = "";
switch(val){
  case 1:
    answer = "alpha";
break;
  case 2:
    answer = "beta";
break;
  case 3:
    answer = "gamma";
break;
  case 4:
    answer = "delta";
break;
}
  console.log(answer)
}
caseInSwitch(1);
//**********************************************************************************************************************************************************
// hamanand dastor {if} dar dastor {switch} nis ebarat else b kar miravad vali dar inja be onvan defaulta yad mishavad mamand code zir
function switchOfStuff(val) {
  let answer = "";
  switch(val){
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
switchOfStuff('a');
//**********************************************************************************************************************************************************
//  hamchenan ma mitavin maghadiri kmibayest yek khoroji ra b ma neshan dahand b shekl zir tarif konim.

function sequentialSizes(val) { 
  let answer = "";
      switch(val){
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
//   sequentialSizes(5);
//**********************************************************************************************************************************************************
// dastor zir dar sorati k do meghdar a va b ba ham barabar bashand true be ma erae midahad dastor payen tar kholase shodeye dastor avalist.
function isEqual(a, b) {  
  if (a === b) {          
    return true;
  } else {
    return false;
  }
}
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
function isEqual(a, b) {
  return a === b;
}
//**********************************************************************************************************************************************************
//  Object
//**********************************************************************************************************************************************************
//  rah digar baraye estefade az moteghayer ha object ast
let myDog = {
  name:"arosak",
  legs:4,
  tails:1,
  friends:["mohsen","parsa"]
};
// ma be do sorat zir mitavanim anhara seda bzanim
 console.log(myDog.name)
 console.log(myDog["legs"])
 console.log(myDog.friends[0])
 console.log(myDog["friends"][1])
//**********************************************************************************************************************************************************


//**********************************************************************************************************************************************************
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;  
const player = testObj[playerNumber];   
//**********************************************************************************************************************************************************
// ma be ravesh zir mitavanim meghdar yek moteghayer ra b roz resani konim
myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["name"] = "Happy Coder";
//**********************************************************************************************************************************************************
//  ba estefade az ravesh zir mitavanim yek moteghayer jadid ba meghdar jadid b object khod ezaf konim.
myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["bark"] = "woof";
//**********************************************************************************************************************************************************
// ba estefade az dastor zir mitavanim yek meghdar ra az object khod kam konim.
myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
//**********************************************************************************************************************************************************
// dastor zir ra ba estefade az object kotah konid.
function phoneticLook(val) {
  let result = "";
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  return result;
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function phoneticLookup(val) {
const lookup={
  "alpha":"Adams",
  "bravo":"Boston",
  "charlie":"Chicago",
  "delta":"Denver",
  "echo":"Easy",
  "foxtrot":"Frank"
}
  return lookup[val];
}
console.log(phoneticLookup("charlie"))

//**********************************************************************************************************************************************************
// ma hamchenan mitavanim b shekl zir neghdar moired niaz khodra seda zade va dar mahal jadid zakhire konim.
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"]; // baraye mavaredi k ba space az ham joda shode and az [ ] va dar hallat mamoli az . estefade mikonim.
//**********************************************************************************************************************************************************
// hamchenan mitavanim be shekl zir yek meghdar ra seda bzanim.
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];
//**********************************************************************************************************************************************************
// halgheye while ya loop while
//**********************************************************************************************************************************************************
// nemoneye yek halgheye while k aadad ra az bozorg b kochak barmigardanad.
let numos = [];
let i = 5;
while (i >= 0){
  numos.push(i);
  i --;
}
console.log(numos)
//**********************************************************************************************************************************************************
//  halgheye for ya loop for
//**********************************************************************************************************************************************************
const ourArray = [];
for (let i = 0; i < 5; i++) {   //dar inja for(a,b,c)taghsim shode ast a:meghdar avalie  --  b:ebarat sharat  -- c:ebarat nahayest.
  ourArray.push(i);
}
//**********************************************************************************************************************************************************
numos = [];
for (let i = 1; i < 10; i += 2){ // dar in ja khorojie ma adad fard ast.
  numos.push(i);
}
numos.unshift(0)
console.log(numos)
//**********************************************************************************************************************************************************
numos = [];
for ( let i = 9 ; i >= 1 ; i -= 2){
  numos.push(i);
}
numos.push(0);
console.log(numos)
//**********************************************************************************************************************************************************
function multiplyAll(arr) {
  let product = 1;
  for (let i=0; i<arr.length; i++){
    for (let j =0; j<arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1,2], [2], [3,5],[8,9,2,1,4]]))
//**********************************************************************************************************************************************************
for (i = 3; i <= 7; i++) { //dastor countinue barkhalaf break faghat ye dastor ra hazf va nadide migirad.
  if (i == 5) {
      continue;
  }
  console.log(i);
}
//**********************************************************************************************************************************************************
//  halghey do while aval code ra ejra mikonad va bad mibinad k dastor shart ejra shode ya kheir.
myArr = [];
i = 10;
while (i < 5) {
  myArray.push(i);
  i++;
}
//********************************************
myArr = [];
i = 10;
do {
  myArray.push(i);
  i++;
}while (i < 5)
//**********************************************************************************************************************************************************
