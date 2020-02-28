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



// I am aiming for a grade of 'meets expectations' but added a tagged property to my objects.


const quotes = [

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
    year: 1690,
    tags: "Courage"
},

  {
    quote: "It's true that things are beautiful when they work. Art is function."  ,
    source: "Giannina Braschi" ,
    citation: "Empire of Dreams",
    year: 1994,
    tags: "Art"
},

  {
    quote: "I set out on a journey of love, seeking truth, peace and understanding. l am still learning." ,
    source: "Muhammad Ali" ,
    citation: "The Soul of a Butterfly",
    year: 2004
},

{
    quote: "Jesus, I must be crazy to be in a loony-bin like this." ,
    source: "Randle McMurphy" ,
    citation: "One Flew Over the Cuckoo's Nest",
    year: 1975
}

]


/***
 * the getRandomQuote function below generates a random
 number based on the number of objects in my quoteIdeas array
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return randomNumber;
}




/***
 * the `printQuote` function creates a variable 'message' that holds a string of my quote and it's properties.
 The function calls a randomly generated quote.
 Finally, the function creates the string that will appear on the screen.
***/

const printQuote = () => {
  let message;
  let selectedQuote = quotes[getRandomQuote()];
message = `<p class = "quote">${selectedQuote.quote}</p>`;
message += `<p class = "source">${selectedQuote.source}`
// if the quote contains a citation, add to string
  if (selectedQuote.citation) {
  message += `<span class = "citation">${selectedQuote.citation}</span>`
}
// if the quote contains a year, add to string
  if (selectedQuote.year) {
  message += `<span class ="year">${selectedQuote.year}</span>`
}
// if the quote contains a tag, add to string
  if (selectedQuote.tags) {
  message += `<span class = "tags">, tagged: ${selectedQuote.tags}</span>`
}
  message += '</p>';
  return document.getElementById('quote-box').innerHTML = message;
}

printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);
