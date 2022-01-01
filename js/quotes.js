const quotes = [
    {
      saying: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      saying: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      saying:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      saying: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      saying: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      saying: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      saying: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      saying: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      saying: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      saying: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

  const saying = document.querySelector("#saying span:first-child");
  const author = document. querySelector("#saying span:last-child");

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  saying.innerText = todaysQuote.saying;
  author.innerText = todaysQuote.author;