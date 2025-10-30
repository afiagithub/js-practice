console.log*("hello world")

console.log("New practice session")

// let x = parseInt(prompt("Enter a number"))
// let y = parseInt(prompt("Enter another number"))
// let z =x+y
// console.log(z)

let a = 3, b=5, c=9;
let x = a + b + c;
let y = c - a;
let z = (b + c) * a;
let i = c/b
console.log(x, y, z, i)

let mark=31
if(mark<0 || mark>100){
    console.log("Invalid input")
}
else{
    if(mark>80){
        console.log("A+")
    }
    else if(mark>70 && mark<80){
        console.log("A")
    }
    else if(mark>70 && mark<80){
        console.log("A-")
    }
    else if(mark>60 && mark<70){
        console.log("B")
    }
    else if(mark>33 && mark<60){
        console.log("C")
    }
    else if(mark<33){
        console.log("F")
    }
    else{
        console.log("Invalid input")
    }
}