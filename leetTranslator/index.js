// *** raw version ***

// Write a function that takes a phrase written in "leet" speak 
// and translates it to english by replacing numbers 
// and misused capital letters into a proper format. 
// While you're at it, remove all misused exclamation marks. 
// They put those darn things everywhere.
// Here's a lexicon of common leet that I found on the Dankwebs (TM)
// 1 2 3 4 5 6 7 8 9 0
// L R E A S b T B g o

// first step, write a function that takes in one parameter
// split the string up so you can inspect each charecter individually
// loop through the array and check if it is a number and needs to be translated to a letter
// push those chars into the new array and join it to form the translated phrase.
// next we need to build a helper function that capatilizes the first letter in a sentence and run the translated phrase through that
// finally removing any exclamation marks that are over used 
// (First thought build a helper function that filters the string and if '!' >= 1 
// then remove them all and just add one at the end **hacky way** 
// or skip the first one and remove the rest??, however if the phrase starts with one and ends with >= 1 then this won't work right and will need refactoring

// const translateLeet = str => {
//   let translated = []
//     const rawChars = str.split('')
//     for (let char of rawChars) {
//       if (char === '1') {
//         translated.push('L')
//       } else if(char === '2') {
//         translated.push('R')
//       } else if(char === '3') {
//         translated.push('E')
//       } else if(char === '4') {
//         translated.push('A')
//       } else if(char === '5') {
//         translated.push('S')
//       } else if(char === '6') {
//         translated.push('b')
//       } else if(char === '7') {
//         translated.push('T')
//       } else if(char === '8') {
//         translated.push('B')
//       } else if(char === '9') {
//         translated.push('g')
//       } else if(char === '0') {
//         translated.push('o')
//       } else {
//         translated.push(char)
//       }
//     }
//      return capitalizer(translated.join('').toLowerCase())
//   }

// .replace() method will search a str for the first matching value 
// and replace it with whatever is given for the second argument. 
// with the g modifier it will replace all values
const translateLeet = str => {
  const translated = str
    .replace(/1/g, "L")
    .replace(/2/g, "R")
    .replace(/3/g, "E")
    .replace(/4/g, "A")
    .replace(/5/g, "S")
    .replace(/6/g, "b")
    .replace(/7/g, "T")
    .replace(/8/g, "B")
    .replace(/9/g, "g")
    .replace(/0/g, "o")
    .toLowerCase()
  return punctuator(capitalizer(translated))
 }
  
  const capitalizer = (str) => {
    //empty array to push everything into
    const capitalized = []
    // grab first letter, capitalize it, and push it into the array
    const firstLetter = str.charAt(0).toUpperCase()
    const remainingStr = str.slice(1)
    capitalized.push(firstLetter + remainingStr)
    return capitalized.join('')
  }

// .search() method will search for a charecter and if none is found it will return -1
// so assuming any ! that is not at the end of the phrase or duplicated we should
// remove all of them, and add one to the end.
// if however there is an index of 0 or greater just return the string 
  const punctuator = (str) =>{
    if (str.search('!') === -1) {
     return str
    } else {
      const removePunc = str.replace(/!/g, '')
      return removePunc + '!'
    }
  }

  console.log(translateLeet('c0m3 47 M3 820')) // -> Come at me bro
  console.log(translateLeet('7h3 W021d i5 f147!!!')) // -> The world is flat!
  console.log(translateLeet("i'm 7311in9 m0M!!")) // -> I'm telling mom!

  // const exclamation = '!'
  // const exclamationPointHelper = (str) => {
  // //  let exclamation = '!'
  //  const rawChars = str.split('')
  //  const removeExclamations = rawChars.filter((letter) => {
  //   return exclamation.indexOf(letter) === -1;
  //  }).join('')
  //   return removeExclamations
  // }
  // exclamationPointHelper("I'm telling mom!!!!!!")
  // exclamationPointHelper("!!!!!!I'm telling mom!!!!!!")
  // console.log(exclamationPointHelper("I'm telling mom!!"))
  
  
   // capitalizer("i'm telling mom!!")
   // console.log(translateLeet('!!133t 5p33k3r5'))
