

// problem sloving 01 */* find minimum number in array

// const answer =Math.min(...aveNumbers);
// console.log(answer);

// const aver =(1, 25, 47);
// const answar = Math.max(aver);
// console.log(answar);


// const aveNumbers =[21, 10, 2, 4, 57, 40, 97, 17, 68];
// function aver(value,total){
//      return value+total;
// }
// const foo = aveNumbers.reduce(aver);
// console.log(foo/9);
// function aver(array){
//        return array.filter((total)=>{
//               return total<10;
//        })
//      }
// console.log(aver(aveNumbers));

// function area(num1, num2){
//     return num1*num2;
// }
// const result = area(12,12);
// console.log(result);

// 

// ১ থেকে ১০০ পর্যন্ত যে সং্খ্যা গুলি কে ৩ আর ৫ দিয়ে 
// ভাগ করলে ভাগশেষ থাকবে না সেই সং্খ্যাগুলি প্রিন্ট করতে হবে


// function isModulas(){
//     for(let i = 1; i <= 100; i++){
//         const modify = i;
//         if(modify % 3 === 0){
//            console.log(modify);
//         }
//     }
// }

// isModulas();

// একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে।
//  তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে।

// const aveNumbers =[21, 10, 2, 4, 57, 40, 97, 17, 68];
// function averageNum(numbers){
//      let result = 0;
//      for(let i = 0; i < numbers.length; i++){
//             result +=numbers[i];

//      }
//      const avagr = result / numbers.length;
//      return avagr;
   
// }

// const abc = averageNum(aveNumbers);
// console.log(abc);


// কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। 
// সেটা চেক করার একটা ফাংশন লিখো।


// function isPrime(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;
// }
// const theNumbar = isPrime(11);
// console.log(theNumbar);

// function compare(a, b) {
//     if (a == b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
//    const result = compare(15, '15');
//    console.log(result);

// function compare(a, b) {
//     if (a.toString() === b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
//    const result = compare('25', '25');
//    console.log(result);


// advence version of decler by loop

// const someArrays =[
//     {id:1, name: 'poco x2 phone', price: 20000},
//     {id:2, name: 'HP leptop', price: 720000},
//     {id:3, name: 'oppo Phone', price: 12000},
//     {id:4, name: 'Dell pro LepTop ', price: 22000},
// ];
// let sum = [];
// for(let i = 0; i < someArrays.length; i++){
//     sum = sum + i;
//     console.log(someArrays[i]);
// };

// for(const someArray of someArrays){
//     console.log(someArray);
// }

// function matchingArray(someArrays, searching){
//     const matching = [];
//     for(const someArray of someArrays){
//         if(someArray.name.toLowerCase().includes(searching.toLowerCase())){
//             matching.push(someArray);
//         }
//     }
//    return matching;
// }
// const result = matchingArray(someArrays,'Leptop');
// console.log(result);