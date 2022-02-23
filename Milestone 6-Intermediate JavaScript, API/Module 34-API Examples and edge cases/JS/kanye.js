const loadQuotes=()=>{
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((json) => displayQuote(json));
}

const displayQuote=(quote)=>{
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText=quote.quote;
}