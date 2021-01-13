// Iteration 1: Names and Input
let hacker1 = 'rigby';
console.log `The driver\'s name is ${hacker1}`;
let hacker2 = 'rigby';
console.log `The navigator\'s name is ${hacker2}`;

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log `The driver has the longest name, it has ${hacker1.length} characters.`;

} else if (hacker2.length > hacker1.length) {
  console.log `The navigator has the longest name, it has ${hacker1.length} characters.`;
 
  } else {
    console.log `Wow, you both have equally long names, ${hacker1.length} characters!`;
  }

// Iteration 3: Loops
let newName = "";
for (i=0; i < hacker1.length; i++){
  newName += (hacker1[i].toUpperCase() + " ")
}
console.log (newName)

  let newString = "";
  for (var i =hacker2.length -1; i >= 0; i--){
  newString += hacker2[i];
  }
  console.log (newString)
// the last part of three
let cheese = [hacker1, hacker2]
let bread = cheese.sort
if (bread[0] === hacker1){
  console.log('The driver\'s name goes first.');
  
} else if 
  (bread[0] === hacker2){
    console.log('Yo, the navigator goes first definitely.');
    
  } else {
    console.log('What?! You both have the same name?')
  }