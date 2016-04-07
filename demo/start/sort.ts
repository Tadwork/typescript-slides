'use strict'
interface Person{
	name:string
	age
}
function sortByName(a:Person[]){
    var result = a.slice(0);
    result.sort(function(x,y){
        return x.name.localeCompare(y.name);
    });
    return result;
}
let S =[{name:'Kathrin',age:20}];

class Class{
}
sortByName(S);