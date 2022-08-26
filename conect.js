// const lists = document.getElementsByClassName('lists');
// for(const list of lists){
//     console.log(list.innerText);
// } 

// const sections = document.querySelectorAll('section');
// for(const section of sections){
//     section.style.border = '2px solid red';
//     section.style.marginBottom = '50px';
//     section.style.borderRadius = '10px';
// }

// const doller = document.getElementById('doller');
// doller.style.backgroundColor = 'red';
// doller.style.margin = '10px';
// doller.style.borderRadius = '20px';


// function makeMe(){
//     document.body.style.backgroundColor = 'red';
// }
// function makeWhite(){
//     document.body.style.backgroundColor = 'white';
// }
// function makeYellow(){
//     document.body.style.backgroundColor = 'yellow';
// }
// const makeBlueBottom = document.getElementById('make-blue');
//     makeBlueBottom.onclick = makeBlue;

// function makeBlue(){
//     document.body.style.backgroundColor = 'blue';
// }

// const blackColor = document.getElementById('black-color');
// blackColor.onclick = function makeBlack(){
//     document.body.style.background = 'black';
// }

// // ---------------------------finer click event------------>>>>>>>>>

// document.getElementById('golden-rod').addEventListener('click',function(){
//     document.body.style.backgroundColor = 'goldenrod';
// })

// -------------------------definetly user case------------->>>>>>>


// -------========--------========form submit======--------======-------->>>>>

// -------========--------========Add comment======--------======-------->>>>>


// document.getElementById('submit-form').addEventListener('click', function(){
//   const newComment = document.getElementById('new-comment');
//   const getComment = newComment.value;

//   const addComment = document.getElementById('add-comment');
//   const peragraph = document.createElement('p');
//   peragraph.innerText = getComment;
//   addComment.appendChild(peragraph);

//   newComment.value ='';

// });

// const nums = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     sum = sum + element;
//     console.log(sum);
    
// }
// return sum;

// const call = [87, 25, 30, 67, 39, 10];

// function numbersOfSum(){
//     let plus = 0;
//      for(let i = 0; i < call.length; i++){
//         const index = i;
//         const num = call[i];
//         plus = plus + num
//         console.log(index,num,plus);
//      }
// }
// numbersOfSum();

// const phones = [
//     {name: 'poco-x2', price:25000},
//     {name: 'oppo', price:15000},
//     {name: 'vivo', price:20000},
//     {name: 'max-pro', price:55000}
// ];

// function findOfPhone(device) {
//     let ofPrice = 0;
//     for(let i = 0; i < device.length; i++){
//         const iteams = device[i];
//         ofPrice = ofPrice + iteams.price;
          
//     }
//     return ofPrice; 
// }   
// const expens = findOfPhone(phones)

// console.log(expens);


const phones = [
    {name: 'poco-x2', price:25000},
    {name: 'oppo', price:15000},
    {name: 'vivo', price:20000},
    {name: 'max-pro', price:55000}
];

function findOfPhone(device) {
    let ofPrice = device[0];
    for(let i = 0; i < device.length; i++){
        const iteams = device[i];
       if(iteams.price < ofPrice.price){
          ofPrice = iteams
       }
          
    }
    return ofPrice; 
}   
const expens = findOfPhone(phones)

console.log(expens);