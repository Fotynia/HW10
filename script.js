// Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі.
//  Числа Фібоначчі визначаються як послідовність,
//  у якій кожне число дорівнює сумі двох попередніх чисел
//   (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі).
//  Використовуйте рекурсію для обчислення чисел Фібоначчі.

// function fib(n) {
//     if (n==1||n==2) 
//     return 1;
//     else 
//     return fib(n-2) + fib(n-1);		
//     }
//     let userNum = + prompt('Введіть порядковий номер числа Фібоначчі');
//     console.log(fib(userNum));


    // Написати функцію, яка повертатиме об'єкт, 
    // де буде властивість result і це буде паліндром, 
    // і властивість steps — це число викликів до знаходження паліндрома. 
    // Для того, щоб перевірити себе використовуйте число 196.
    //  Це так зване Lychrel number — число яке немає поліндрому.
//    function isPalindrome(num) {
//     const numStr = num.toString();
//     const reversedStr = numStr.split('').reverse().join('');
//     return numStr === reversedStr;
// }
// function findPalindrome(startNum, maxSteps) {
//     let steps = 0;
//     let currentNum = startNum;
//     while (steps < maxSteps) {
//         const reversedNum = parseInt(currentNum.toString().split('').reverse().join(''), 10);
//         const sum = currentNum + reversedNum;
//         if (isPalindrome(sum)) {
//             return {
//             result: sum,
//             steps: steps + 1
//             };
//         }
//       currentNum = sum;
//       steps++;
//     }
//     return {
//     result: null,
//     steps: steps
//     };
// }
// const { result, steps } = findPalindrome(196, 100);
// console.log(`Result: ${result}`);
// console.log(`Steps: ${steps}`);


    // Напишіть функцію, яка приймає масив унікальних елементів 
    // і генерує всі можливі перестановки цього масиву. 
    // Використовуйте рекурсію для знаходження всіх перестановок. 
    // Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив,
    //  що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], 
    //  [3, 1, 2] і [3, 2, 1].
  //   function generatePermutations(arr) {
  //     const result = [];
  //     function permute(currentArr, remainingArr) {
  //         if (remainingArr.length === 0) {
  //             result.push(currentArr.slice());  
  //         return;
  //         }
  //     for (let i = 0; i < remainingArr.length; i++) {
  //        const currentElement = remainingArr[i];
  //       const newRemainingArr = remainingArr.slice(0, i).concat(remainingArr.slice(i + 1));
  //       currentArr.push(currentElement);
  //      permute(currentArr, newRemainingArr);
  //      currentArr.pop();
  //     }
  //     }
  //   permute([], arr);
  //   return result;
  // }
  // const inputArray = [1, 2, 3];
  // const permutations = generatePermutations(inputArray);
  // console.log(permutations);
  