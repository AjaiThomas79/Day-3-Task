//var arr =[3,4,"ajai",true];
var personData={
    firstName:"Ajai",
    secondName:"Thomas",
    gender:"Male",
    nationality:"Indian",
    maritalStatus:"Married",
    languages:['Hindi','Malayalam','Tamil','English']
}
console.log("Example >> FOREACH LOOP >>")
console.log(Object.keys(personData));
Object.keys(personData).forEach(function displayKeys(element){
    console.log(element + ":" + personData[element]);
    
})
console.log("Example >> FOR LOOP >>")
for(var i = 0;i<Object.keys(personData).length;i++){
  
    console.log(Object.keys(personData)[i] + ":" + Object.values(personData)[i]  );
}
console.log("Example >> FOR OF >>")
for(val of Object.keys(personData)){
    console.log(val + ":" + personData[val]);
}
console.log("Example >> FOR IN >>")
for(var key in personData){
    console.log(key,personData[key]);
}
// console.log("Example >> FOREACH >>")
// arr.forEach(function displayElement(element){
// console.log(element);
// })