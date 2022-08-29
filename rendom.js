const rendom = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(Data => deUsers(Data.results))
}

const deUsers = users =>{
    const crt = document.getElementById('rendom-user')
    for(const user of users){
        console.log(user);
        const crtDiv = document.createElement('div')
        crtDiv.classList.add('user')
        crtDiv.innerHTML = `
           <h3>user : ${user.name.first} ${user.name.last}</h3>
           <h3>Email : ${user.email}</h3>
           <p>user Address: ${user.location.city}, ${user.location.country}</p>
           <p>Gender : ${user.gender}</p>
        `;
        crt.appendChild(crtDiv);
    }
}

rendom();