function hasTargetSum(array, target) {
  // Implementation of the algorithm
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
// The time complexity of this function is O(n^2), where n is the length of the input array.

Function hasTargetSum(array, target):
  For each element i in array:
    For each element j in array starting from i+1:
      If array[i] + array[j] equals target:
        Return true
  Return false
*/
*/

The function hasTargetSum iterates through each pair of elements in the input array and checks if their sum is equal to the target. If a pair is found, the function returns true; otherwise, it returns false. This is a straightforward, brute-force approach that compares all possible pairs, resulting in a time complexity of O(n^2). While simple, it may not be the most efficient solution for large arrays.
*/


if (require.main === module) {
  // Custom Test 1: Positive case
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));


  // Custom Test 3: Negative case
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


  console.log("");
}
