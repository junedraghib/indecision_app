//argument object : not bound with arrow function



//this keyword : not bound with arrow function, 
//however we can define another variable to reference to this keyword 

//challenge
const multiplier = {
    numbers: [2, 3, 4, 5],
    multiplyBy: 2,
    //new syntax to define tradational methods, this is accessable in 
    //the arrow function because arrow function isn't a part of object 
    //but a part of part of the object, thus arrow fun can access this of other 
    //objects within the scope
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy)
    }
}

console.log(multiplier.multiply())