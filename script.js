
//problem solving 1
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log(findMax([3, 7, 1, 9, 2]));   // 9
// console.log(findMax([-5, -1, -10]));     // -1


// problem solving 2

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 5, 40]));   // true
console.log(isSorted([1, 3, 2]));       // false

// نبدأ من العنصر الثاني (i = 1)

// نقارن كل عنصر بالعنصر اللي قبله

// لو لقينا عنصر أصغر من اللي قبله → المصفوفة مو مرتبة → نرجع false فوراً

// لو خلصنا الحلقة بدون ما نلاقي مشكلة → المصفوفة مرتبة → نرجع true




