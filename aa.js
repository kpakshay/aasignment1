//hoisting
console.log(a);
var a=5;

//call||apply||bind

var obj={
    name:"Akshay",
    age:23,
}
var printDetails=function(place,state){
    console.log(`Name : ${this.name}. Age : ${this.age}. Place:${place}. State:${state}`)
}
//call
printDetails.call(obj,"Kannur","Kerala")

//apply
printDetails.apply(obj,["Kannur","Kerala"])

//bind
var bindedfun=printDetails.bind(obj,"Kannur","Kerala")
console.log(bindedfun)