var quoteData = [
    {authorName: '--Oscar Wilde' ,quoteAuthor: '“Be yourself; everyone else is already taken.”'},
    {authorName: '--Marilyn Monroe' ,quoteAuthor:  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`},
    {authorName: '--Albert Einstein' ,quoteAuthor:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`},
    {authorName: '--Frank Zappa' ,quoteAuthor:'“So many books, so little time.”'},
    {authorName: '--Marcus Tullius Cicero' ,quoteAuthor:'“A room without books is like a body without a soul.”'},
    {authorName: '--Bernard M. Baruch' ,quoteAuthor:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`},
    {authorName: '--Mae West' ,quoteAuthor:'“You only live once, but if you do it right, once is enough.”'},
    {authorName: '--Mahatma Gandhi' ,quoteAuthor:'“Be the change that you wish to see in the world.”'},
    {authorName: '--Mark Twain' ,quoteAuthor:`“If you tell the truth, you don't have to remember anything.”`},
    {authorName: '--Elbert Hubbard' ,quoteAuthor:'“A friend is someone who knows all about you and still loves you.”'},
    {authorName: '--John Green' ,quoteAuthor:'“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”'},
    {authorName: '--George Bernard Shaw ' ,quoteAuthor:`“Life isn't about finding yourself. Life is about creating yourself.”`},
]
function showQuote(){
    var quote = Math.floor(Math.random()*quoteData.length);
    document.getElementById('quoteOutput').innerHTML=quoteData[quote].quoteAuthor;
    document.getElementById('quoteAuthor').innerHTML=quoteData[quote].authorName;
}