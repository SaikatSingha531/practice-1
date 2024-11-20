// **Even or Odd Checker:

// let i = prompt ("Enter A Number Here");

// if (i%2 == 0 ){
//     document.querySelector("input").value= (`${i} Is A Even Number`)
//     console.log(`${i} Is A Even Number`)
// }else{
//     console.log(`${i} Is A Odd Number`)
// }



// **Array Sum:

// let i = [2,4,6,8];

// let final = i.map(i=> i*2)

// console.log(final)


// *Reverse a String:

// let i = prompt ("Enter Your Text Here")

// function rev (str){
//    return str.split("").reverse().join("")
// }

// document.querySelector("input").value = rev(i);


// **Find the Largest Number:

// let i = [2,4,6,8];

// let max = Math.min(...i);

// console.log(max)

// let i = [ 1,2,4,6,8,100];
// let max = Math.max(...i);
// let min = Math.min(...i);

// console.log(`The Max Value is ${max} And The Min Value Is ${min}`)


// ** Palindrome Checker

// let i = prompt ("Enter Your Text Here")

// function rev (str){
//    return str.split("").reverse().join("")
// }

// // document.querySelector("input").value = rev(i);

// if (i === rev(i)){
//     document.querySelector("input").value = "True"
// }else{
//     document.querySelector("input").value ="False"
// }


// **Count Vowels:

// let i = prompt("Write Some word")

// if (i === "a" || i==="e" || i === "i" || i === "o" || i === "u"){
//     document.querySelector("input").value ="This Is Vowel"
//     console.log("This Is Vowel")
// }else{
//     document.querySelector("input").value ="This Is consonant"
//     console.log("This Is consonant")
// }



// **Capitalize First Letter:

let t = document.querySelector ("input");
let b = document.querySelector ("button");

b.addEventListener("click", function (){
    t.value = t.value.toUpperCase();
});