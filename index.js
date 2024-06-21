// let name = "john doe,";
// let age =19;
// let occupation = "student."

// console.log ("hello! I am  "+ name, "I am "+ age + "years old, " + "I am a "+ occupation)

//embeeded outcome format
// let name = "john doe,";
// let age =19;
// let occupation = "student."
// console.log (`hello! I am  ${name} I am  ${age}years old,   I am a ${occupation}`)

//console.log(( false && true) || false);

// let bal = 7000;
// if (bal > 5000){
//     console.log("you have money for trip. lets go")
// }
//     else{
//         console.log("sorry not enough money.save more!")
//     }
//     console.log("the end!")

// if the bal is less than 5k that is 4k 
// let bal = 7000;
// if (bal > 5000){
//     console.log("you have money for trip. lets go");
// }else if (bal > 3000) {
//     console.log("you only have money for staycation");
// }else{
//     console.log("sorry not enough money.save more!");
//    }
//    console.log("the end!")

   // switch case
//    let age = 15
//    switch(age){
//     case 10:
//     console.log("Age is 10");
//     break;
//     case 20:
//     console.log("Age is 20");
//     break;
//     default:
//     console.log("Age is neither 20 0r 10");
//    }


// without break, codes runs ccontinuously
// switch(0){
//     case 1:
//     console.log("value is one ");

//     case 0 :
//     console.log("value is 0");
    
//     default:
//     console.log("no matching case");
//    }


// switch(20){
//         case 10 + 10:
//         console.log("value is twenty");
//         break;
//        }

// student grade using witch
// let studentGrade = "D"
//    switch(studentGrade){
//     case "A":
//     console.log("You got an A, so here's a Chocolate for you!");
//     break;
//     case "B":
//     console.log("You got a B, here's a Cookie for you!");
//     break;
//     case "C":
//     console.log("You got a C, there's room for improvement and here's your Candy!");
//     break;
//     default:
//     console.log("No reward to give");
//    }


// student grade using if else
// let studentGrade = "C";

// if (studentGrade==="A"){
// console.log("You got an A, so here's a Chocolate for you!");
// }else if (studentGrade==="B") {
// console.log("You got a B, here's a Cookie for you!");
// }else if (studentGrade==="C") {
// console.log("You got a C, there's room for improvement and here's your Candy!");
// }else{
// console.log("No reward to give.");
//    }

// //for looping
// let heads = 0;
// let tails = 0;
// for (letx=1; x<10; x++){
//     if (Math.random()<0.5){
//         tails++;
//     }else{
//         heads++;
//     }
    
// }
// console.log("tossed the coin ten times");
// console.log(`number of heads: ${heads}`);
// console.log(`number of heads: ${tails}`);

// while looping
// let i= 0;
//  while (i<6){
//     console.log(`the value of i = ${i}`);
//     i++
//  }

// let flips = 0;

// let isHeads = false;



// while (!isHeads) {

// flips++;

// isHeads = Math.random() < 0.5;

// }
// console.log(`It took ${flips} flips to land on heads.`);

// Half pyramid
// console.log("Half Pyramid:");
// for (let i = 1; i <= 5; i++) {
//     console.log("*".repeat(i));
// }

// // Reverse half pyramid
// console.log("\nReverse Half Pyramid:");
// let j = 5;
// while (j >= 1) {
//     console.log("*".repeat(j));
//     j--;
// }


//function parentheses and argument.
//function greet(name) 
//      function greet(name){
//     console.log(`Hello, ${name }!`);
//     console.log("Nice weather today, right?");
// }
// greet("Peter")

//more parameter
// 

// //default paramether
// function greet(name = "Nathan") {

//     console.log(`Hello, ${name}!`);
    
//     console.log("Nice weather today, right?");
    
//     }
//     greet()
//     greet("Jack");


//one default parmeter for name and one non default para 
// for weather
// function greet(weather, name = "Nathan") {

//     console.log(`Hello, ${name}!`);
    
//     console.log(`It's ${weather} today, right?`);
    
//     }
    
//     greet("sunny");

//one non-default parmeter for weather after one  default para 
// for name, then the name parameter to get to the weather parameter.
// function greet( name = "Nathan", weather) {

//     console.log(`Hello, ${name}!`);
    
//     console.log(`It's ${weather} today, right?`);
    
//     }
    
//     greet(undefined, "sunny");

// //arrow key
// const greetings = (name) => {

//    console.log(`Hello, ${name}!`);
   
//    };
   
   
   
//    greetings("John");



// //Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.

// The function accepts one parameter: the side of the square.

// The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.

// The output shows the size of the size, the area, and the perimeter as follows:

// The square side is 8

// The area of the square is 64

// The perimeter of the square is 32

//solution

function calculateSquare(side) {
   // Calculate the area of the square
   var area = side * side;
   
   // Calculate the perimeter of the square
   var perimeter = 4 * side;
   
   // Print the results
   console.log("The square side is " + side);
   console.log("The area of the square is " + area);
   console.log("The perimeter of the square is " + perimeter);
}

// Example usage
calculateSquare(8);



let myBook = {

   title: "JavaScript Introduction",
   
   author: "Nathan Sebhastian",
   
   };
   
   
   
   // add release year property
   
   myBook.year = 2023;
   
   
   
   // add publisher property
   
   myBook["publisher"] = "CodeWithNathan";
   
   //change the author property

   // myBook.author = "John Doe";  

   //deleting properties
   // delete myBook.author;


   
   console.log(myBook);



   //checking if properties exist in objects
   // let person = {

   //    firstName: "Nathan",
      
   //    lastName: "Sebhastian"
      
   //    }
      
      
      
   //    // check if firstName exists
      
   //    console.log('firstName' in person); // true
      
      
      
   //    // check if age exists
      
   //    console.log('age' in person); // false



// //Create a person object with the following properties:

// name - the person's name
// age - the person's age
// greet() - a function to greet another person
// Inside the greet() function, introduce the person, specifying the name and the age.

// Here's an example output:

// person.greet();



// Hello! My name is Alex and I'm 22 years old.

      // Create the person object
let person = {
   name: 'Alex',
   age: 22,
   greet: function() {
       console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
   }
};

// Example usage
person.greet();




class CashRegister {
   constructor() {
       this.itemsForSale = {
           'Phone': 300,
           'Smart TV': 220,
           'Gaming Console': 150
       };
       this.shoppingCart = [];
   }

   addItem(itemName) {
       if (this.itemsForSale.hasOwnProperty(itemName)) {
           this.shoppingCart.push(itemName);
           console.log(`${itemName} added to the shopping cart.`);
       } else {
           console.log(`We don't sell ${itemName}.`);
       }
   }


   calculateTotalPrice() {
       let totalPrice = 0;
       for (let item of this.shoppingCart) {
           totalPrice += this.itemsForSale[item];
       }
       return totalPrice;
   }

   applyDiscount(totalPrice) {
       if (totalPrice > 400) {
           return totalPrice * 0.9;
       }
       return totalPrice;
   }

   pay(paymentAmount) {
       let totalPrice = this.calculateTotalPrice();
       totalPrice = this.applyDiscount(totalPrice);
       console.log(`Total price: $${totalPrice.toFixed(2)}`);

       if (paymentAmount >= totalPrice) {
           const change = paymentAmount - totalPrice;
           console.log(`Thank you for your purchase!`);
           if (change > 0) {
               console.log(`Your change is $${change.toFixed(2)}`);
           }
       } else {
           console.log(`You do not have enough money to purchase the items.`);
       }
   }
}

// // Example usage
const register = new CashRegister();
register.addItem('Phone');
register.addItem('Smart TV');
register.addItem('Laptop'); // This item is not for sale
register.addItem('Gaming Console');
register.pay(700); // Example payment amount
