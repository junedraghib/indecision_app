class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

//extending classes
class Student extends Person{
    constructor(name, age, major){
        super(name, age) //calling parent class constructor
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    //overriding method
    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their Major is ${this.major} !`
        }
        return description
    }
}

class Traveller extends Person{
    constructor(name, age, homelocation){
        super(name, age);
        this.homelocation = homelocation;
    }

    hasHomeLocation(){
        return !!this.homelocation
    }

    getGreeting(){
        let greeting = super.getGreeting()
        if (this.hasHomeLocation()) {
            greeting += `I am Travelling from ${this.homelocation}`
        }
        return greeting
    }
}

// const me = new Student("Juned Raghib", 21, "Computer SCience")
// console.log(me)
// console.log(me.getGreeting())
// console.log(me.getDescription())

// const other = new Student()
// console.log(other)
// console.log(other.getGreeting())
// console.log(other.getDescription())

const me = new Traveller("Juned Raghib", 21, "New Delhi")
const other = new Traveller()

console.log(me.getGreeting())
console.log(other.getGreeting())