// const tinderUser = new Object() //singleton object hai
const tinderUser = {};  //  non singleton object hai
 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedin = true
console.log(tinderUser);


//suppose data is coming from database they came like array of objects. 
//how can you traverse the entire neccesary information

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedin' ] 
//now you can traverse and get your data what you want
console.log(Object.values(tinderUser)); // [ '123abc', 'sammy', true ] 
//now you can traverse and get your data what you want


// suppose data came from database and what you want is not in the coming data 
// then you have to cheked first this data is present or Not
// ---------------HOW---------------
console.log(tinderUser.hasOwnProperty('isLoggedin')); //true






const regularUser = {
    email:"some@gmail.com",
    fullname : {
        userfullname : {
            firstnmae : "Ritesh",
            middleNmae: "Kumar",
            lastNmae : "Gupta"
        },
        city : "panki"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstnmae);

const obj1 = {1:"a",2:"b"}
const obj12 = {3:"a",4:"b"}
const obj3 = {obj1,obj12}
console.log(obj3);
// ouput : object into object
// { 
//     obj1: { '1': 'a', '2': 'b' }, 
//     obj12: { '3': 'a', '4': 'b' } 
// }

const obj4 = Object.assign({},obj1,obj12)
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj5 = {...obj1,...obj12}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const users = [
//     {
//         id:1,
//         email: "ritesh@gmu.com",
//     }
// ]