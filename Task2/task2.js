var movies = [];

movies.push("The Batman");
movies.push("The Godfather");
movies.push("Pulp Fiction");
movies.push("Rush Hour");
movies.push("Spirited Away");

if (movies[3].charAt(0) === "I") {
    console.log("Yay");
  } else {
    console.log("Nay");
  }

movies = [];

movies[3] = "Iron Man";
console.log(movies);


