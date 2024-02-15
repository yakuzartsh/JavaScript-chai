// function sayMyname(){
//     console.log("R");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }
// sayMyname();



// function add2number (x,y){
//     // console.log(x+y);
//     return x+y

// }
// add2number(6,7);
// const result = add2number(3,78)
// console.log(result);

// function loginuserMessage(username){
//     if(!username){
//         console.log("Please Enter a User Nmae");
//         return
//     }

//     return `${username} just logged in`
// }
// console.log(loginuserMessage("Ritesh")); //Ritesh just logged in
// console.log(loginuserMessage()); //undefined just logged in



// function calculateCartPrice(num1){
//         return num1
// }

// console.log(calculateCartPrice(2)); //output 2
// console.log(calculateCartPrice(200,100,2000)); // output 200



// function calculateCartPrice(...num1){
//         return num1
// }

// console.log(calculateCartPrice(2)); //output 2
// console.log(calculateCartPrice(200,100,2000)); // output [ 200, 100, 2000 ]

// function calculateCartPrice(val1,val2,...num1){
//         return num1
// }

// console.log(calculateCartPrice(2)); //output 2
// console.log(calculateCartPrice(200,100,2000,3453,65,6334)); // output [ 2000, 3453, 65, 6334 ]

//PASSING OBJECT INTO THE FUNCTION

const user =  {
    name : "Ritesh",
    price : 199
}

function handleObject(x){
    console.log(x.name);
    console.log(x.price);
}

handleObject(user);
handleObject({
    name : "manu",
    price : 3435
})

//passing array into function argument
const arr = [100,343,243,545,2546]
function retrunSecondValue(x){
    return x[1]
}
console.log(retrunSecondValue(arr));
