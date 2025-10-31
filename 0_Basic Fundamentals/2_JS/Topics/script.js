if (condition) {
    console.log("Hello, World!");
} else {
    console.log("Goodbye, World!");
}

if (condition) {
    console.log("Hello, World!");
}else if (condition) {
    console.log("Goodbye, World!");
} else {
    console.log("Hello again, World!");
}


switch  (expression) {
    case (valueOrCondition) :
    // code
    break;
    case 2 :         
    // code
    break;
    default :
    // code
} 

(age  == age) ? console.log("Hello, World!") : console.log("Goodbye, World!");


let any = alert("Hello, World!");
let any2 = prompt("Hello, World!"); // takes the Value
let any3 = confirm("Hello, World!"); // returns true or false

let strMethods = "   John    ";
strMethods.length;
strMethods.trim();
strMethods.toUpperCase();
strMethods.toLowerCase();
strMethods.indexOf("o");
strMethods.slice(1,4);
strMethods.replace("o", "a");
strMethods.charAt(2);
strMethods.split(" ");

let arr = [1,2,3,4,5];  
let arr2 = [[1,2,3] , [4,5,6]];

arr.push(); // adds to the end
arr.pop(); // removes from the end
arr.shift(); // removes from the start

arr.splice(1,2); // removes from index 1, 2 elements
arr.splice(1,0,"a","b"); // adds at index 1, 0 elements removed

arr.sort(); // sorts the array
arr.reverse(); // reverses the array

for(let i = 0; i<=5; i++) {
    console.log(i);
}

for(let i of arr) {
    console.log(i);
}

while(condition) {
    // code
}