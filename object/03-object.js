// +++++++++++++++++++DESTRUCTURING______________________________


const course = {
    coursename : "js in hindi",
    price : 1234,
    courseInstructor : "Hitesh"
}

const {courseInstructor : ci,   price:pr} = course
console.log(ci,pr);


//JSON----

{
    "name" : "Ritesh",
    "courseNmae" : "Hitesh",
    "Price" : "Free"
}

[
    {},
    {},
    {}
]