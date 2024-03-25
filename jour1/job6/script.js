// function fizzbuzz(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (numbers[i] % 3 === 0) {
//       console.log("Fizz");
//     } else if (numbers[i] % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(numbers[i]);
//     }
//   }
// }

// let numbers = Array.from({ length: 152 }, (_, index) => index);
// fizzbuzz(numbers);

function fizzbuzz() {
  for (let i = 1; i <= 151; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Appel de la fonction fizzbuzz avec une plage de nombres de 1 à 151
fizzbuzz();
