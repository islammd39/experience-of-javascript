// js math*

// var romaGive = 1000;
// var orange = 400;
// var apple = 300;
// var totalAmount = orange + apple;
// var inHand = romaGive - totalAmount;
// console.log(inHand);


// var Mathematics = 75.25;
// var biology = 65;
// var Chemistry = 80;
// var Physics = 35.45;
// var bangla = 99.50;
// var totalScore = Mathematics + biology + Chemistry + Physics + bangla;
// totalScore /= 5;
// totalScore = totalScore.toFixed(2);
// totalScore = parseFloat(totalScore);
// console.log(totalScore);

// var x = 'I am going to be';
// var y = 'an awesome web developer';
// var z = x + ' ' + y;

// console.log(z);

// var saraGive = 119;
// saraGive %= 5;
// console.log(saraGive);

// js array*

// var friendsAge = [ 21, 26, 30, 24, 27, 23];
// var friendsNames = [ 'rohit', 'virat', 'kartik', 'sakib', 'rifat'];



// console.log(friendsNames.length);
// console.log(friendsAge);
// friendsAge[2] = 33;
// console.log(friendsAge);
// friendsNames [1] = 'rahat';
// console.log(friendsNames);
// var positionIndex = friendsAge.indexOf(24);
// console.log(positionIndex);
// var positionIndex = friendsNames.indexOf('kartik');
// console.log(positionIndex);
// console.log(friendsAge[3]);

// friendsAge.push(110);
// console.log(friendsAge);


// friendsAge.pop();
// console.log(friendsAge);

// friendsAge.shift();
// console.log(friendsAge);


// var fruits = ['Apple', 'Banana', 'Orange'];
// // fruits = fruits.indexOf('Banana');
// // fruits[1] = 'mango';
// fruits.pop();
// fruits.push('Watermelon');
// console.log(fruits);

// if else*

// var num1 = 13;
// var num2 = 47;
// var num3 = 117;

// if(num1 > num2){
//     if (num1 > num3){
//         console.log(num1);
//     }
//     else{
//         console.log(num3);
//     }
// }

// else{
//     if(num2 > num3){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }



// {
// var myResult = 85;
// var tomResult = 66;
// var johnResult = 95;
// var shamResult = 56;
// var mimiResult = 40;

// if (myResult > tomResult){
//     console.log("my result A+");
// }
// if (myResult < johnResult){
//     console.log("john result A+");
// }
// if (johnResult > shamResult){
//     console.log("my result A+");
// }
// if (myResult > tomResult){
//     console.log("my result A+");
// }
// if (myResult > tomResult){
//     console.log("my result A+");
// }

// }

// const sideLeft = 8;
// const sideRight = 8;
// const sideBottom = 9;

// if (sideLeft === sideRight || sideLeft === sideBottom){
//     console.log("isocless");
// }
// else{
//     console.log("false");
// };

/**
 * while loop condition
 * */

// var i = 0;
// for (i=0; i<5; i++){};
// console.log(i);

// var roastGiven = 0;
// while (roastGiven < 7){
//     console.log('roast den please')
//     console.log(roastGiven);
//     roastGiven++;
// }

// var personOne = 0;
// while (personOne < 5){
//     console.log('Attitude person')
//     console.log(personOne);
//     personOne++;
// }


// var numbar = 1;
// while (numbar <= 10){
//     console.log('tumi akta kore namber barau');
//     console.log(numbar);
//     numbar++;
// }

// for loop condition with simplyfy

// for (var number = 1; number <= 10; number++){
//     console.log(number);
// }

// for (var roast = 1; roast <= 10; roast++){
//     console.log(roast);
// }


// for loop simple even numbar with shorthand

// for (var i = 0; i <= 10; i +=2){
//     console.log(i);
// }

// loop with array

// var numbars =[ '2', '3', '17', '24', '28', '16', '20', '25', '26', '29', '30', '36', '42', '44', '52', '67', '80', '100'];

// for (var i = 0; i <= 10; i++){
//     var totalNumbar = numbars[i];
//     console.log(totalNumbar);
// }

// loop break for loop

// for (var i = 0; i <=20; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }

// loop break for loop

// var numbars =[ '2', '3', '17', '24', '28', '16', '20', '25', '26', '29', '30', '36', '42', '44', '52', '67', '80', '100'];

// for (var i = 0; i < numbars.length; i++){
//     var totalNumbar = numbars[i];
//     console.log(totalNumbar);
//     if (totalNumbar > 60){
//         break;
//     }
// }

// for loop with array continune

// var numbars =[ '2', '93', '17', '82', '28', '16', '20', '25', '26', '29', '30', '36', '42', '44', '52', '67', '80', '100'];

// for (var i = 0; i < numbars.length; i++){
//     var totalNumbar = numbars[i];
//     if (totalNumbar < 50){
//         continue;
//     }
//     console.log(totalNumbar);
// }

// while loop revers way

// var num = 10;
// while (num >= 1){
//     console.log(num);
//     num--;
// }

// for loop revers way

// for (var i = 10; i >= 1; i--){
//     console.log(i);
// }



// var myBalence = 65000;
// var macPrice = 90000;
// var gamingLeptop = 60000;
// var lenovoYoga = 40000;
// var oldLeptop = 20000;
// var noMoney = 0;


//     if(macPrice < myBalence){
//         console.log('I will buy mac');
//     }
//     else if(gamingLeptop < myBalence){
//         console.log('I will buy gaming leptop');
//     }
//     else if(lenovoYoga < myBalence){
//         console.log('I will buy lenovo yoga leptop');
//     }
//     else if(oldLeptop < myBalence){
//         console.log('I will buy old leptop');
//     }
//     else{
//         console.log('sorry, i will buy leptop next year');
//     }


// function create

// function movie() {
//   return "Poran";
//   return "Din-The day";
//   return "Hawa";
//   console.log(movie());
// }

// function startFun() {
//   console.log('one day i will to be a fullstack developer');
// }
// startFun();

// function startPhone(){
//   console.log('ata amar phone');
//   console.log('ata mar phone na');
//   console.log('ata tomar phone na');
// }
// startPhone();

// function dexttopComputer(){
//   console.log('amar computer table a sob kichui ache');
//   console.log('amar table a leptop chara r kichu nei');
// }

// dexttopComputer();


// function myMoney(money){
//   console.log('amar ato tk nai');
//   console.log(money);
// }

// myMoney(200);

// function rutine(morning, evening){
//   console.log(morning, evening);
// }
// rutine('5am', '10pm');


// function sum(a, b, c, d, e, f, g){
//   var plas = (10 + 20 + 30 + 40 + 50 + 60 + 70);
//   console.log(plas);

// }
// sum();

// function myTable(leptop, dextlamp, mouse, phone, coolingfan){
//   var totalPrice =(75000 + 500 + 300 + 20000 + 1000);
//   console.log(totalPrice);
// }
// myTable();

// function add(num1, num2){
//   var sum = num1 + num2;
//   console.log(num1, num2);
//   return sum;
// }

// var total = add(45, 45);
// console.log(total);

// function resturent(money){
//   var porotaPrice = 10;
//   var quantity = money / porotaPrice;
//   return quantity;
// }
// var pabo = resturent(200);
// console.log(pabo);


// function dailyroutine(morningKhoroch, lunchKhoroch, nightKhoroch){
//   var pardayMealprice = morningKhoroch + lunchKhoroch + nightKhoroch;
//   console.log(morningKhoroch , lunchKhoroch , nightKhoroch);
//   return pardayMealprice;
// }

// var parMealprice = dailyroutine(25, 25, 25);
// console.log(parMealprice);


// function too(dailymeal){
//   var meal = 25;
//   var times = dailymeal * meal;
//   return times;

// }

// var how = too(3);
// console.log(how);

// function myAveragemarks(frist, second, third){
//   const totalMarks = frist + second + third;
//   const average = totalMarks / 3;
//   return average;
// }
// const myFristmarks = 53;
// const mySecondmarks = 49;
// const myThirdmarks = 60;

// const totaleAverage = myAveragemarks(myFristmarks, mySecondmarks, myThirdmarks);
// console.log(totaleAverage);

// function todayFriendshipday(time){
//     if(time > 7){
//         return true;
//     }
//     else{
//         console.log(false);
//     }
// }
// const yes = todayFriendshipday(10); 
// console.log(yes);

// function inchFeet(inchs){
//     let feet = inchs / 12;
//     return feet;
// }
// const myinchs = 144;
// const myFeet = inchFeet(myinchs);
// console.log(myFeet);

// function cmFeet(feet){
//     let myFeet = feet / 30.48;
//     return myFeet;
// }
//   let mycm = 180;
//   let myfeet = cmFeet(mycm);
//   myfeet = myfeet.toFixed(2);
//   myfeet = parseFloat(myfeet);
//   console.log(myfeet);

// function isEven(even){
//     let reminder = even % 2;
//     if(reminder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const myNumbar = isEven(10);
// console.log(myNumbar);

// const harNumbar = isEven(13);
// console.log(harNumbar);


// function isLeapyear(year){
//     const getLeaper = year % 4;
//     if(getLeaper === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const thatYear = 2001;
// const thatyearResult = isLeapyear(thatYear);
// console.log(thatyearResult);

// const thisYear = 2004;
// const result = isLeapyear(thisYear);
// console.log(result);

// function getSum(numbars){
//     console.log(numbars);
// }
// const myNumbar = [12, 23, 35, 74, 2, 47, 96, 25, 36, 78, 10, 49];
// getSum(myNumbar);


// function getSum(numbars){
//     let sum = 0;
//     for(let i = 0; i < numbars.length; i++){
//         const index = i;
//         const element = numbars[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }
// const myNumbar = [12, 23, 35, 74, 2, 47, 96, 25, 36, 78, 10, 49];
// getSum(myNumbar);



// function getOddnumber(numbars){
//     for(let i = 0; i < numbars.length; i++){
//         const index = i;
//         const element = numbars[index];
//         if(element % 2 === 0){
//             console.log(index, element);
//         }
//     }
// }
// const myNumbar = [12, 23, 35, 74, 2, 47, 96, 25, 36, 78, 10, 49];
// getOddnumber(myNumbar);

// =====================================================================
// =========================================================

// function getOddnumber(numbers){
//     const oddNumber = [];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0){
//             console.log(index, element);
//             oddNumber.push(element);
//         }
//     }
//     return oddNumber;
// }
// const myNumber = [12, 23, 35, 74, 2, 47, 96, 25, 36, 78, 10, 49];
// getOddnumber(myNumber);

// let sum = 0;

// for(let i = 1; i <= 7; i++){
//     sum = sum + i;
//     console.log(sum);
// }

// let intoo = 0;

// for(let i = 0; i <= 10; i++){
//     intoo = intoo + i;
//     console.log(i, intoo);
// }

// function sumofNumbers(number){
//     let intoo = 0; 

//     for(let i = 0; i <= number; i++){
//     intoo = intoo + i;
//     console.log(i, intoo);

//     }
//     return intoo;
// }
// const sumNumber = 10;
// const total = sumofNumbers(sumNumber);

// function getMulti(number){
//     let multification = 1;

//     for(let i = 1; i <= number; i++){

//         multification = multification * i;
//     } 
//     return multification;
// }

// const intooo = 10;
// const result = getMulti(intooo);
// console.log(result);

// function factorial(number){
//     for(let i = number; i >= 1; i--){
//          console.log(i);
//     }
// }
// factorial(7);

// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;
//         console.log(i);
//     }
//     return result;
// }

// const getNumber = 10;
// const fect = factorial(getNumber);
// console.log(fect);
 

// function factorial(numbar){
//     let num = 1;
//     let result = 1;
//     while(num <= 10){
//         result = result * num;
//         num ++;
//     }
//     return result;
// }
// const myNumbar = 10;
// const total = factorial(10);
// console.log(total);


// let sum=0; 
// for( let i = 0; i<=6; i++){ 
//     sum = sum + i; 
//     console.log(sum);
// }

// ===================================================
// function maxArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element > largest){
//             largest = element;
//         }
        
//     }
//     return largest;
// }

// const myArray = [12, 25, 55, 887, 66];
// const totalArray = maxArray(myArray);
// console.log(totalArray);

// object diclaration

// const myPhone = {
//   color : 'blue',
//   rem : '6/64gb',
//   camera : '13mpx',
//   prosesor : 'snapdragon',
//   price : 20000,
// }
// console.log(myPhone.color);
// console.log(myPhone.camera);
// console.log(myPhone);

// const propertices = Object.keys(myPhone);
// const pro = Object.values(myPhone);
// console.log(propertices);
// console.log(pro);

// const proName = 'camera';
// const proValue = myPhone[proName];
// console.log(proName, proValue);

// myPhone.camera = '15mpx';
// console.log(myPhone);

// const myHouse = {
//     tv : 2,
//     almira : 2,
//     dresingtable : 1,
//     teatable : 3,
//     fredize : 4,
//     bed : 5,
// }

// const keys = Object.keys(myHouse);
// console.log(keys);
// const values = Object.values(myHouse);
// console.log(values);

// for(let i = 0; i < keys.length; i++){
//     let proName = keys[i];
//     let values = myHouse[proName]; 
//     console.log(proName, values);
// }

// if else vs switch

// const color = 'perpule';

// if(color === 'green'){
//     console.log('lt is green');
// }
// else if(color === 'black'){
//     console.log('lt is black');
// }
// else if(color === 'red'){
//     console.log('lt is red');
// }
// else if(color === 'yellow'){
//     console.log('lt is yellow');
// }
// else if(color === 'white'){
//     console.log('lt is white');
// }
// else if(color === 'perpule'){
//     console.log('lt is perpule');
// }
// else{
//     console.log('it is beautiful')
// }

// switch(color){
//     case 'green':
//         console.log('lt is green');
//         break;
//     case 'perpule':
//         console.log('lt is perpule');
//         break;
//     case 'yellow':
//         console.log('it is yellow');
//         break;
    
//     case 'black':
//         console.log('it is black');
//         break;
    
//     case 'red':
//         console.log('it is red');
//         break;

//     default:
//         console.log('lt is white');
// }   

// string case upper and lowear case

// const india = 'good country';
// const bangladesh = 'good cOuntry';
// if(india.toLowerCase() === bangladesh.toLowerCase()){
//     console.log(true);
// }
// else{
//     console.log('something deffernce');
// }

// sring includes object

// const myRoom ='table chair leptoP bed fridge';
// const valid = myRoom.includes('bed');
// // console.log(valid);

// const tosearching = myRoom.toLowerCase().includes(myRoom.toLowerCase());
// console.log(tosearching);

// console.log(myRoom.toLowerCase().indexOf('leptop'));

// slice, split, substing, sunsrt

// const lyrices = 'tumi bondhu kala pakhi ami jano ki. bosonto kalke bondhui bolte parini.';
// const parts = lyrices.split(' ');
// console.log(parts);

// const sentences = lyrices.split('.');
// console.log(sentences);

// const carectors = lyrices.split('');
// console.log(carectors);

// const sliceBread = lyrices.slice(5, 11);
// console.log(sliceBread); 



// js mathameticals


// const number = -78; 
// const answer = Math.abs(number); 
// console.log(answer);


// const result = Math.pow(2, 5);
// console.log(result);

// const num1 = 25;
// const num2 = 45;
// const gap = Math.abs(num1 - num2);
// if(gap < 5){
//     console.log('it is part of the life');
// }
// else{
//     console.log('easy part of life');
// }

// const fullNumber = 2.34011;
// const number = Math.round(fullNumber);
// console.log(number);


// const fullNumber = 2.34011;
// const number = Math.ceil(fullNumber);
// console.log(number);

// const fullNumber = 2.34011;
// const number = Math.floor(fullNumber);
// console.log(number);

// const sufful = Math.round(Math.random()*6);
// console.log(sufful);
  
// swap, verialble

// let frist = 5;
// let second = 7;
// console.log(frist, second);
// const tem = frist;
// frist = second;
// second = tem;
// console.log(frist, second);



// createing fibonacci

// const fibo = [0, 1];
// for(let i = 2; i <= 15; i++){
//     fibo[i]= fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


// biriyani value
// more duplicate vavlue remove in arrray

// const friends = ['gablu', 'hablu', 'mablu', 'hodlu', 
// 'padlu', 'imran', 'imran', 'hasan', 'sorif', 'hasan', 'hablu'];

// const total = [12, 25, 78, 69, 35, 88, 10];

// function remove(num){
//     const add = [];
//     for(let i = 0; i < friends.length; i++){
//         const sum = friends[i];
//         if(add.includes(sum) === false){
//             add.push(sum);
//         }
//     }
//     return add;
// }
// const get = remove(friends);
// console.log(get);


// const friends = ['hasan', 'habib', 'rehan', 'joy', 'hasan', 'habib', 'rehan', 'joy'];

// function removeFriend(names){
//     const path = [];
//     for (let i = 0; i < names.length; i++){
//         const element = names[i];
//         if (path.includes(element) === false) {
//             path.push(element);            
//         }
//     }
//     return path;
// }

// const close =removeFriend(friends);
// console.log(close);





