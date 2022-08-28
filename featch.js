// const shopjn = JSON.stringify(shop);
// const phs = JSON.parse(shopjn)

// console.log(phs);



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}

function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => console.log(json))
}

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => giveData(data))
}

function giveData(data) {
    const create = document.getElementById('user-id');
    for (const item of data) {
        console.log(item.name);
        const elmt = document.createElement('li');
        elmt.innerText = item.name;
        create.appendChild(elmt);
    }

}

function post() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => getPost(data))
}

function getPost(posts) {
    const createOfPost = document.getElementById('post-create');
    for (const post of posts){
        
        const main = document.createElement('div');
        main.classList.add('color')
        main.innerHTML=`
           <h2>User-Id ${post.id}</h2>
           <h3>User Name: ${post.name}</h3>
           <h5>User Email:${post.email}</h5>
        `
        ;
        createOfPost.appendChild(main);
        
    }
}
post()

