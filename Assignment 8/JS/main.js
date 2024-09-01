var quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    author: `― Mae West`
}, {
    quote: `"Be yourself; everyone else is already taken."`,
    author: `― Oscar Wilde`
}, {
    quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    author: `― Albert Einstein`
}, {
    quote: `"So many books, so little time."`,
    author: `― Frank Zappa`
}, {
    quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    author: `― Bernard M. Baruch`
},]

var btn = document.querySelector("#Qbtn");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");

function generateQuote(){
    var random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    author.innerHTML = quotes[random].author;
};