// Get quotes with api
const quoteContainer = document.getElementById("quote-containe");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");

let apiQuotes = [];

function newQuote() {
	const q = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(q);
	quoteText.textContent = q.text;
	if (!q.author) {
		authorText.textContent = "Unknown";
	}
	authorText.textContent = "- " + q.author;

	// Experimental
	if (q.text.length > 10) {
		quoteText.classList.add("long-quote");
	}
}

async function getQuotes() {
	const apiURL = "https://type.fit/api/quotes";
	try {
		const res = await fetch(apiURL);
		apiQuotes = await res.json();
		// console.log(apiQuotes[12]);
		newQuote();
	} catch (error) {
		// Handle Error Error
		alert("Not Found ERR_API");
	}
}

// To Tweet
function tweetQuote() {
	const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterURL, "_blank"); // _blank opens in new tab
}

// EventListner
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);

// on Loading

getQuotes();
