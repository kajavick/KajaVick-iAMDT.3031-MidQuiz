function Arrayfunc(){
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
}

Arrayfunc();

function Objecfunc(){
    var car = {
    model: "Tesla Model 3",
    colour: "White",
    price: 77
}

if (car.price > 50){
    console.log("Expensive");
} else {
    console.log("Affordable");
}

console.log("Colour:", car.colour);
}

Objecfunc();