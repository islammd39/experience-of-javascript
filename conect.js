// const lists = document.getElementsByClassName('lists');
// for(const list of lists){
//     console.log(list.innerText);
// } 

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '50px';
    section.style.borderRadius = '10px';
}

const doller = document.getElementById('doller');
doller.style.backgroundColor = 'red';
doller.style.margin = '10px';
doller.style.borderRadius = '20px';


function makeMe(){
    document.body.style.backgroundColor = 'red';
}
function makeWhite(){
    document.body.style.backgroundColor = 'white';
}
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
const makeBlueBottom = document.getElementById('make-blue');
    makeBlueBottom.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const blackColor = document.getElementById('black-color');
blackColor.onclick = function makeBlack(){
    document.body.style.background = 'black';
}

// ---------------------------finer click event------------>>>>>>>>>

document.getElementById('golden-rod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})

// -------------------------definetly user case------------->>>>>>>


// -------========--------========form submit======--------======-------->>>>>

// -------========--------========Add comment======--------======-------->>>>>


document.getElementById('submit-form').addEventListener('click', function(){
  const newComment = document.getElementById('new-comment');
  const getComment = newComment.value;

  const addComment = document.getElementById('add-comment');
  const peragraph = document.createElement('p');
  peragraph.innerText = getComment;
  addComment.appendChild(peragraph);

  newComment.value ='';

})



document.getElementById('my-form').addEventListener('click', function(){
    console.log('how to be');

});

    // const myForm = document.getElementById('my-new-comment');
    // const myValue  = myForm.value;
   


