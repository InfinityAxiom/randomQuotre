

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    source: 'Ralph Waldo Emerson',
    citation: ' Gems of Literature',
    year: '1900'

  },
  {
    quote: '"The way to get started is to quit talking and begin doing."',
    source: 'Walt Disney ',
    citation: '',
    year: ''
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt, ',
    citation: '',
    year: '1857'

  },
  {
    quote: 'If you look at what you have in life, you will always have more. If you look at what you dont have in life, you willll never have enough.',
    source: 'Oprah Winfrey ',
    citation: ' TV Show',
    year: '2008'

  },
  {
    quote: 'Booyakasha',
    source: 'Ali G',
    citation: ' Da Ali G Show',
    year: '2004'

  },
  {
    quote: 'Whoever is happy will make others happy too.',
    source: 'Anne Frank',
    citation: '',
    year: ''

  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa',
    citation: '',
    year: ''

  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin Roosevelt',
    citation: '',
    year: ''

  },
  {
    quote: 'Dont judge each day by the harvest you reap but by the seeds that you plant.',
    source: 'Robert Louis Stevenson',
    citation: '',
    year: ''

  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle',
    citation: '',
    year: ''

  },
];



//Function That generates a random number and returns a quote based off the random number
function getRandomQuote() {
  //Generate A Random Number Between 1 and  the number of quotes we have

  var randomNumber = Math.floor((Math.random() * quotes.length));
  //select which quote to pull
  return quotes[randomNumber]
}



//Print quote function
//Print out the string on screen 
function printQuote() {
  var getRand = getRandomQuote();
  var emptryString = '<p class="quote">' + getRand.quote + '</p>' +
    '<p class ="source">' + getRand.source + '</p>'

  if (getRand.citation.length !==0) {
    emptryString += '<span class = "citation">' + getRand.citation + '</span>'
  }
  if (getRand.year.length !==0) {
    emptryString += '<span class = "year">' + getRand.year + '</span>'
  }
  emptryString += '</p>';
  document.getElementById('quote-box').innerHTML = emptryString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);