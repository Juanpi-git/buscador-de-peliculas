const pelis = require("./pelis.js");

function main() {
  if (process.argv[2] == "--sort") {
    console.log(pelis.getProperty());
  } else if (process.argv[2] == "--search") {
    console.log(pelis.getMoviesWithWord());
  } else if (process.argv[2] == "--tag") {
    console.log(pelis.getMoviesWithTag());
  } else {
    console.log(pelis.getAll());
  }
}

main();
