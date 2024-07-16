const fs = require("fs");

const pelisBuffer = fs.readFileSync(__dirname + "/pelis.json");
const pelisString = pelisBuffer.toString();
const pelisArray = JSON.parse(pelisString);

function getAll() {
  const allMovies = pelisArray;

  return allMovies;
}

function getProperty() {
  if (process.argv[3] == "title") {
    const titles = [];
    for (let i = 0; i < pelisArray.length; i++) {
      titles.push(pelisArray[i].title);
    }
    const titlesInAphabeticalOrder = titles.sort();

    return titlesInAphabeticalOrder;
  } else if (process.argv[3] == "rating") {
    const ratings = [];
    for (let i = 0; i < pelisArray.length; i++) {
      ratings[pelisArray[i].title] = pelisArray[i].rating;
    }
    const ratingsInAscendingOrder = ratings.sort((a, b) => a - b);

    return ratingsInAscendingOrder;
  } else if (process.argv[3] == "tags") {
    const tags = [];
    for (let i = 0; i < pelisArray.length; i++) {
      tags[pelisArray[i].title] = pelisArray[i].tags;
    }
    return tags;
  }
}

function getMoviesWithWord() {
  const word = process.argv[3];

  const moviesWithWord = [];

  for (let i = 0; i < pelisArray.length; i++) {
    if (
      pelisArray[i].title.includes(word) ||
      pelisArray[i].title.includes(word[0].toUpperCase() + word.slice(1))
    ) {
      moviesWithWord.push(pelisArray[i]);
    }
  }

  return moviesWithWord;
}

function getMoviesWithTag() {
  const tag = process.argv[3];

  const moviesWithTag = [];

  for (let i = 0; i < pelisArray.length; i++) {
    if (pelisArray[i].tags.includes(tag[0].toUpperCase() + tag.slice(1))) {
      moviesWithTag.push(pelisArray[i]);
    }
  }
  return moviesWithTag;
}

module.exports = { getAll, getProperty, getMoviesWithWord, getMoviesWithTag };
