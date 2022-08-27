// declarection arrow function 1


// const test = (frist,second) => frist + second;
// const result = test(10,50);
// console.log(result);

// arrow funtion no perametter 2

// const noPerametter = () => 3.15;
// const result = noPerametter();
// console.log(result)

// arrow function one perameter

// const onePerameter = (num) => num + 10;
// const result = onePerameter(5);
// console.log(result)

// multipul function useing arrow function

// const multiLine = (first,second,third,forth) =>{
//      const one = first * second;
//      const two = one + third;
//      const three = two / 2;
//      const total = one + two + forth + three;
//      return total;   
// }
// const grand = multiLine(25,5,10,20);
// console.log(grand)

// two dimentional array using ...

// const numbers  = [2,5,7,3,6]


// const numbers1 = [...numbers];
// numbers.push(49)
// console.log(numbers)
// numbers1.push(333)
// console.log(numbers1)

// const newArray = [10,20, ...numbers1,30,40]
// console.log(newArray)


// const max = Math.max(...newArray);
// console.log(max)


// array and object descturing

// const obbjc = {a:'mahi', b:'chintu', c:'salam'};
// const {a} = obbjc
// console.log(a)

// const {a,...d} = {a:'mahi', b:'chintu', c:'salam'};
// console.log(a,d)

// const [x,y,z] = [25,58,69,87];
// console.log(x,y,z)

// function getValue(num) {
//     return num * 2;
// }

// const getValueRpt = num => num * 2;

// const numbers = [2, 5, 7, 3, 6];

// function get(numbers) {
//     const add = [];
//     for (const number of numbers) {
//         const sum = getValueRpt(number);
//         add.push(sum)

//     }
//     return add
// }
// console.log(get(numbers))

// arrow function with using map mathod

// const makeDubble = numbers.map(getValueRpt)
// console.log(makeDubble)

// const numbers = [2, 5, 7, 3, 6];
// const arrow = num => num * 2;
// const makeMap = numbers.map(arrow)
// console.log(makeMap)

// const numbers = [2, 5, 7, 3, 6].map(x => x * 2);
// console.log(numbers)

// const numbers = [2, 5, 7, 3, 6];
// const bigNum = numbers.filter(x => x < 5 );
// console.log(bigNum)


// get the value in array even or odd number

// const numbers = [2, 5, 7, 3, 6];
// const evenNum = numbers.filter(x => x % 2 ===0);
// console.log(evenNum)