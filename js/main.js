//1

const arr1 = [1, 2, 3];
arr1[1] = 10;
console.log(arr1); 

console.log("===================================");

//2
const arr2 = ['1', '2', '3'];
arr2.push('4');
console.log(arr2);

console.log("===================================");

//3
const arr3 = [1, 2, 4]
let sum = 0;
for (number of arr3) {
    sum += number;
}

console.log(sum);

console.log("===================================");

//4
const arr4 = [1, 2, 3, 4, 5]
for (number of arr4) {
    console.log(`${number}`);
}

console.log("===================================");

//5
const arr5 = ['hello', 'world', 'this', 'is', 'js'];
for (characters of arr5 ) {
    if (characters.length < 5) {
        continue;
    }
    console.log(characters);
}

console.log("===================================");

//6
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr6[0];
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > max) {
        max = arr6[i]
    }
}
console.log(max);

console.log("===================================");

//7
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];
for (const num of arr7) {
    if (num % 2 === 0) {
        evens.push(num);
    }
}
console.log(evens);

console.log("===================================");