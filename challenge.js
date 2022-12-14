//                                                                          Challeng 1
console.log("\nChalleng 1 ***************************************************\n ")
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
console.log("golfScore " + golfScore(9,1))
console.log("golfScore " + golfScore(5,2))
console.log("golfScore " + golfScore(5,4))
console.log("golfScore " + golfScore(5,5))
console.log("golfScore " + golfScore(8,9))
console.log("golfScore " + golfScore(7,9))
console.log("golfScore " + golfScore(3,7))

/****************************************************************************Challeng   2  ****************************************************************************/
console.log("\nChalleng 2 ***************************************************\n ")
// function zir ra ba dastor switch taghir dahid
function chainToSwitch(val) {
  let answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}
console.log (chainToSwitch(99))
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
function chainToSwitch(val){
  let answer = "";
  switch(val){
    case "bob":
      answer = 'Marley'
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = "There is no #1"
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
    break;
  }
  return answer;
}
console.log(chainToSwitch('bob'))

/****************************************************************************Challeng****************************************************************************/
console.log("\nChalleng 3 ***************************************************\n ")
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"))
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"))
console.log(checkObj({city: "Seattle"}, "city"))
console.log(checkObj({city: "Seattle"}, "district"))

/****************************************************************************Challeng****************************************************************************/

