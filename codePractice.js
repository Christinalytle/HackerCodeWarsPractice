codePractice.js

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

  let testArray = [-4, 3, -9, 0, 4, 1]

  //lets sort the array
  //declare positiveNumber, zeroNumber, negativeNumber
  //loop through the array
  //if arr[i]  > 0 we will positiveNumber++
  //if arr[i] = 0 we will zeroNumber++
  //if arr[i] < 0 we will negativeNumber++
  //positiveNumber / array.length
  //zeronumber / array.length
  //negativeNumber / array.length

  function plusMinus(arr) {
      //if the length is 0 - return 0
      let positiveCount = 0; 
      let zeroCount = 0; 
      let negativeCount = 0; 
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] === 0) {
              zeroCount++
          } else if(arr[i] > 0) {
              positiveCount++
          } else if (arr[i] < 0) {
              negativeCount++
          }
      }

      console.log(zeroCount/arr.length.toFixed(6))
      console.log(positiveCount/arr.length.fixed(6))
      console.log(negativeCount/arr.length.toFixed(6))
  }

//   Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

function staircase(n) {
    for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(n - (n - i)))
}
}