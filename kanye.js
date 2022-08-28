const loadAdd = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = getquote => {
    const quote = document.getElementById('quote')
    quote.innerText = getquote.quote;
}