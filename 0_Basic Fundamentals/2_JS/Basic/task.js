const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const btn   = document.querySelector("button");
let answer = document.querySelector("#answer");

// function mult() {
//     let result = parseInt(number1.value) * parseInt(number2.value);
//     answer.textContent = `This is the Answer: ${result}`;
// }
// btn.addEventListener("click", mult)


btn.addEventListener("click", () => {
    let result = parseInt(number1.value) * parseInt(number2.value)
    answer.textContent = `This is the Answer : ${result}`
})


// to print Using Prompt Table 
// let promt = prompt("Number you need to multiple")
// let num =parseInt(promt );

// function multi() {
//     for(let i=num;  i<=num*10; i=i+num){
//         console.log(`Multi of ${num} is : ${i}`)
//     }
// }

// multi()

//or

// let number = parseInt(prompt("Number you need to multiply"));

// function format() {
//     for (let j = 1; j <= 10; j++) {
//         document.write(`${number} X ${j} = ${number * j} <br>`);
//     }
// }

// format()

// roll a dice 

// function dice() {
//     let result = Math.floor(Math.random()*6)+1;
//     console.log(`Rolled dise value is = ${result}`)
// }

// dice()
// dice()
// dice()
// dice()
// dice()

