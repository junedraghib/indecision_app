//var based variable can be reassigned and re define, 
//but let variable can be reassignedbut cant be redefined
//and const variables can neither be reassigned nor redefined

var nameVar = 'Juned Raghib'
var nameVar = 'New Name'
// console.log('Name',nameVar)

let nameLet = 'Juned'
// let nameLet = 'Juned Raghib'
// let nameLet = 'New Name'
// console.log('Name : ', nameLet)

const nameConst = 'Juned Raghib'
nameConst = 'New Name '
console.log('Name : ', nameConst)

//var have block(within {})  level scope, while let n const don't

