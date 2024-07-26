var generatQuote = [
    {'authour':'Oscar Wilde',
    'quote':'Be yourself; everyone else is already taken.'},
    {'authour':'Albert Einstein',
    'quote':'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles'},
    {'authour':'Nelson Mandela',
    'quote':'The greatest glory in living lies not in never falling, but in rising every time'},
    {'authour':'Steve Jobs',
    'quote':'Your time is limited, so don\'t waste it living someone else\'s'},
    {'authour':'Eleanor Roosevelt',
    'quote':'Do one thing every day that scares you.'},
];

function generateQuote(){
    var randomQuote = Math.floor(Math.random() * generatQuote.length);
    document.getElementById('quote').innerHTML = generatQuote[randomQuote].quote;
    document.getElementById('authour').innerHTML = generatQuote[randomQuote].authour;
}