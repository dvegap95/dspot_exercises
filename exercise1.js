function handleString(str) {
  //reference first letter for compare
  let prevLetter = str[0];
  //count the letters "deleted"
  let delCount = 0;
  //iterate over the string
  for (let i = 1; i < str.length; i++) {
    //does current letter equal the reference letter?
    if (str[i] === prevLetter) {
      //"delete" it
      delCount++;
    } else {
      //reference letter is now current letter
      prevLetter = str[i];
    }
  }
  //return deletions counter
  return delCount;
}

module.exports = handleString;
