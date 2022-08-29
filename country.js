const loadedd = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => subLoad(data))
}

const subLoad = coun =>{
    const country = document.getElementById('country-user')
    for(const user of coun){
        const crea = document.createElement('div')
        crea.classList.add('cls')
        crea.innerHTML =`
        <h3>user country : ${user.name.common}</h3>
        <p>Capital : ${user.capital}</p>
        <button onclick ="eventt()">click</button>
        `;
        country.appendChild(crea)
    }
    
}

const eventt = () =>{
    console.log('its work');
}


loadedd();