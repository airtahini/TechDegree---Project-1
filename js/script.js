/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

const quoteIdeas = [

  {
    quote: "Beauty is something that disappears when you try to define it."  ,
    source: "Iain Banks" ,
    citation: "The State of the Art",
    year: 1989
},

  {
    quote: "Courage is a mean with regard to fear and confidence."  ,
    source: "Aristotle" ,
    citation: "Nicomachean Ethics",
    year: "1094 A.D."
},

  {
    quote: "Whistling to keep myself from being afraid."  ,
    source: "John Dryden" ,
    citation: "Amphitryon",
    year: 1690
},

  {
    quote: "It's true that things are beautiful when they work. Art is function."  ,
    source: "Giannina Braschi" ,
    citation: "Empire of Dreams",
    year: 1994
},

  {
    quote: "I set out on a journey of love, seeking truth, peace and understanding. l am still learning." ,
    source: "Muhammad Ali" ,
    citation: "The Soul of a Butterfly",
    year: 2004
},

]


/***
 * the getRandomQuote function below generates a random
 number based on the number of objects in my quoteIdeas array
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quoteIdeas.length);
  return randomNumber
}


// below is a variable 'message' that will hold the object we are printing to screen
let message;
/***
 * the `printQuote` function
***/

const printQuote = () => {
let selectedQuote = quoteIdeas[getRandomQuote()];
message = '<p> class = "quote">' + selectedQuote.quote + '</p>'
message += '<p> class = "source">' + selectedQuote.source

if (selectedQuote.citation) {
  message += 'span class = "citation">' + selectedQuote.citation + '</span>'
} else if (selectedQuote.year) {
  message += 'span class = "year">' + selectedQuote.year + '</span>'
}
  message += '</p>'
}

printQuote()

document.getElementById('quote-box').innerHTML = message;



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);
