//Prelims
//1
if (5 > 3){
    console.log("is greatr than");
}

//2
if (3 === "cat".length){
    console.log("is the length")
}

//3
if ("cat" === "dog"){
    console.log("same")
} else {
    console.log("we are not alike")
}


//Bronze
//1
var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18){
    console.log("is old enough")
} else {
    console.log("not old enough")
}

//2 & 3
if (person.name[0] === "B" && person.age >18 ){
    console.log("Enter")
} else {
    console.log("get away")
}

//Silver
//1
if (1 === "1"){
    console.log("strict");
} else if(1 == "1"){
    console.log("loose");
} else {
    console.log("not equal at all")
}

//2
if (1 <= 2 && 2 === 4){
    console.log("yes");
} else {
    console.log("no")
}


//Gold
//1
if (typeof "dog" === "string"){
    console.log(typeof "dog")
} else {
    console.log("not a string")
}

//2
if (typeof "true" === "boolean"){
    console.log("its booly")
} else {
    console.log("its string")
}

//3
let name = "tay";
if (name === undefined){
    console.log(undefined)
} else{
    console.log("this my name")
}

//4
if ("s" > 12){
    console.log("interesting")
} else {
    console.log("cant compare")
}

//5&6
let myNum = 16;
myNum % 2 === 0 ? console.log("even"): console.log("odd")