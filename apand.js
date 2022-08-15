

const dollers = document.getElementById('doller');
const li = document.createElement('li');
li.innerText = 'top of the world';
doller.appendChild(li);


const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'added a section';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'frist added text';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'second added text';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'third added text';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);



const sectionss = document.createElement('section');
section.innerHTML = `
<h2>this is backtik grad</h2>
<ul>
<li>intertensting</li>
<li>moja</li>
<li>wow</li>
</ul>
`
mainContainer.appendChild(sectionss);


document.getElementById('my-form').addEventListener('click',function(){
    const myNewComment = document.getElementById('my-new-comment');
    const updateComment = myNewComment.value;
    const insideAdd = document.getElementById('inside-add');
    const addParagraph = document.createElement('p');
    addParagraph.innerText = updateComment;
    insideAdd.appendChild(addParagraph);
    
    myNewComment.value = '';
});






