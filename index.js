const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]

const quoteContainer = document.getElementById("quote-container")
const quote = document.getElementById("quote")
const author = document.getElementById("author")

fetch("https://api.unsplash.com/photos/random?client_id=7DF9ElcPWk4SQmQU7nt7j1A5T_SGX2QQ6TLUVsvw4aY&orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => { 
        document.body.style.backgroundImage = `url(${data.urls.full})`
    })

function renderQuote() {
    const randomQuote =  quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = randomQuote.quote
    author.innerHTML = "- " + randomQuote.author
}

renderQuote()