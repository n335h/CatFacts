const displayedQuotes =[];

async function getQuote() {// define the function to get the quote
    const response = await fetch(`https://meowfacts.herokuapp.com/`); // fetch the data from the API
    const data = await response.json();// convert the data to JSON
    const meowfact = data.data[0];// get the first quote from the data

    if (!displayedQuotes.includes(meowfact)){// check if the quote has already been displayed
    const heading = document.querySelector("#quote");// select the heading element from the DOM
    heading.textContent = meowfact;// set the heading text to the quote
    displayedQuotes.push(meowfact);// add the quote to the displayed quotes array
    addQuoteToHistory(meowfact);// add the quote to the history
  }else{
    getQuote(); // call the function to get the first quote
  }
}
    
    document.getElementById("new-quote-button").addEventListener("click", getQuote);

    
  

    function addQuoteToHistory(quote) { // add the quote to the history
        const quoteList = document.getElementById("quote-history"); // select the quote history element from the DOM
        const newQuoteItem = document.createElement("li"); // create a new list item element
        newQuoteItem.innerText = quote;// set the list item text to the quote
        quoteList.appendChild(newQuoteItem);// add the list item to the list
      }

const audio = new Audio("https://bigsoundbank.com/UPLOAD/mp3/1898.mp3?v=d");// create a new audio element
const buttons = document.querySelectorAll("button"); // select all the buttons from the DOM

buttons.forEach(button => { // loop through the buttons
  button.addEventListener("click", () => { // add a click event listener to each button
    audio.play();// play the audio
  });
});

    
