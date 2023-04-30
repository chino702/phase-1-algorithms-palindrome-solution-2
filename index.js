function isPalindrome(word) {
  var reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
1. Define the function isPalindrome that takes a string as input.
2. Create a new string variable called reversedString and initialize it to an empty string.
3. Use a loop to iterate over each character in the input string, starting from the last character and working backwards.
4. In each iteration of the loop, add the current character to the reversedString variable.
5. After the loop has finished, check if the reversedString variable is equal to the original input string.
6. If the reversedString is equal to the input string, return true, otherwise return false.
*/

/*
 To fix the errors in the code, I changed the isPalindrome function so that it would return the correct value. I made sure to check if the reversed string was equal to the original string and returned true if it was, and false otherwise. Then, I ran the tests again, and everything passed!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
