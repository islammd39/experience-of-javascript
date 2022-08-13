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