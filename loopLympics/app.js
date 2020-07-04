//prelim
//1
for (let i = 0; i <= 9; i++){
    console.log(i);
}

//2
for (let i = 10; i >= 0; i--){
    console.log(i);
}

let fruit = ["banana", "orange", "apple", "kiwi"]
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//Bronze
//1
myArray = [];
for (let i = 0; i < 10; i++){
    myArray.push(i)
    console.log(myArray[i])
}
console.log(myArray)

//2
for (let i = 0; i < 101; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//3
let fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(let i = 0; i < fruit2.length; i += 2){
    let newFruit = [];
    newFruit.push(fruit2[i]);
    console.log(newFruit);
}

//Silver
//1
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
// for ( let i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
//}

//2
let names = [];
let occupations = [];
for ( let i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    
    occupations.push(peopleArray[i].occupation);
    
}
console.log(names);
console.log(occupations)

//3
let peeps = [];
let jobs = [];
for (let i = 0; i < peopleArray.length; i += 2){
    peeps.push(peopleArray[i].name);
    jobs.push(peopleArray[i + 1].occupation)
}console.log(peeps)
console.log(jobs)

//Gold
//1
var matrix = []
for (var i = 0; i < 3; i++){
  matrix[i] = []
  for (var j = 0; j < 3; j++){
    matrix[i][j] = 0
  }
}
console.log(matrix)

var matrix = []

for (var i = 0; i < 3; i++){
  matrix[i] = []
  for (var j = 0; j < 3; j++){
    matrix[i][j] = i
  }
} console.log(matrix)


var matrix = []

for (var i = 0; i < 3; i++){
  matrix[i] = []
  for (var j = 0; j < 3; j++){
    matrix[i][j] = j + 0
  }
} console.log(matrix)