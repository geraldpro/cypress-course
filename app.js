//Task 4: Print Hello world
alert('Hello,  world!');

//Task 5: 
const day = 'Thursday'
const position = 4
const output = 'Today is' + day +',' 'it is the '+ postion'th' + 'of the week'
console.log(output)


// Task 6:
let number = 1
if(number%2===0){
    console.log('Number is even')
}
else{
    console.log('Number is odd')
}

//Task 7

//Initializes the slides
const slide1 = 2
const slide2 = 3
const slide3 = 3

//Checks if all sides are equal
if(slide1===slide2 && slide1===slide3 && slide2===slide3){
    console.log('Equilateral triangle')
}
//Checks if any of the sides are equal
else if(slide1===slide2||slide1===slide3||slide2===slide3){
    console.log('Isosceles triangle')
}
//Checks if none of the sides are equal.
else{
    console.log('Scalene triangle')
}


//Task 8

for(i=1;i<=20;i++){
    if(i%2!==0){
        //Print the odd number
        console.log(i)
    }
}


//Task 9

//Function to calculate area of a rectangle
function areaOfRectangle(lenght, width){
    let area = lenght*width
    console.log(area)
}

areaOfRectangle(7,5)