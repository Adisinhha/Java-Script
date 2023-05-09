/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
function findUnion(array1, array2) {
  const unionSet = new Set();

  for (const element of array1) {
    unionSet.add(element);
  }

  for (const element of array2) {
    unionSet.add(element);
  }

  return [...unionSet];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const unionArray = findUnion(array1, array2);

console.log(unionArray); 

