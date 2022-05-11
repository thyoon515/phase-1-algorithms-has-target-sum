function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let k = i + 1; k < array.length; k++) {
      if(array[i] + array[k] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n * n)
*/

/* 
  Add your pseudocode here

  if sum of two variables in a array equals the target number then return true, if not false.
  take one variable at a time and adding the second variable until finds the match for target number.
  array[0] + array[1] === 10 
  array[0] + array[2] === 10
  ...
  Iterate through array by each variables starting from [0] of an array and incrementing by 1 until it reaches the end of the array,
  iterate through array starting from [1] until the end of an array, incrementing by 1
  Sum the first and second line to check if it matches the target number,
  if it matches return true
  if not return false 
  */
 
 /*
 Add written explanation of your solution here
 iterate through each variables in the array 
 then iterate throuhg each variables again but adding plus 1, because we are not adding the same variable twice.
 add both iteration to see if it matches the target number if it does return true
 if not return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
