function isPalindrome(word) {
  const stringFlipped = stringFlipper(word)
  if (word === stringFlipped) {
    return true
  } else {
    return false
  }
}

function stringFlipper (string) {
  let newString = []
  for (let i = 0; i < string.length; i++) {
    newString.unshift(string[i])
  }
  return newString.join('')  
}

/* 
// write a callback function that returns the string flipped backwards
// save that callback to a const
//compare it with the input string
*/

/*
//stringFlipper takes any string, iterates over the characters in the string,
then unshifts them into an array that is joined and r esults in a flipped string.
isPalindrome calls stringlipper back and compares it with the unflipped string.
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
