/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/
function CodelandUsernameValidation(str) {
    if (str.length < 4 || str.length > 25) return false;
    if (str.charAt(str.length - 1) === '_') return false
    if (!startsWithLetter(str.charAt(0))) return false;
    for (const letter of str) {
        if (!isAlphaNumericOrUnderscore(letter)) return false;
    }
    return true;
}
function startsWithLetter(char) {
    const letter = /^[a-zA-Z]+$/;
    return char.match(letter) ? true : false;
}
function isAlphaNumericOrUnderscore(char) {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    return (char.match(letterNumber) || char === '_') ? true : false;
}
// console.log(CodelandUsernameValidation("u"))
//******************************************************************************************************** */
function CodelandUsernameValidation2(str) { 
    const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const valid_length = (str) => str.length >= 4 && str.length <= 25;
    return valid_reg.test(str) && valid_length(str);
  }
//   console.log(CodelandUsernameValidation2("_u__hello_world123"));
//******************************************************************************************************** */
//******************************************************************************************************** */
function remainder(x, y) {
	if (x>y) return y;
    if (x<y) return x;
	if (x==y) return 0;
	
}
console.log(remainder(1,3))