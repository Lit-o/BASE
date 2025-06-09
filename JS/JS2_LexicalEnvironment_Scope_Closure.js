"use strict"

// The lexical environment in JavaScript 
// is a crucial concept for understanding how the language manages variables 
// and their accessibility. It's essentially a structure that 
// stores the variables and functions defined in a specific scope,
// along with a reference to its outer scope.


// Scope:
// Lexical environments are tied to the scope where code is written. 
// This means that the location of code within your file determines 
// how the JavaScript engine interprets it.


// Structure:
// A lexical environment consists of two main parts:

// Environment Record: 
// This stores the actual variables 
// and functions declared within the current scope.

// Outer Lexical Environment Reference: 
// This refers to the lexical environment of the parent scope, 
// forming a chain of environments.

// Creation:
// A new lexical environment is created whenever a 
// function is defined or a new block is entered


// Accessibility:
// When a variable is accessed, the JavaScript engine first 
// looks in the current lexical environment. 
// If not found, it follows the outer environment references 
// until the variable is found or the global scope is reached


// Closures:
// Closures are functions that "remember" their lexical environment, 
// even after the outer function has finished executing. 
// This allows inner functions to access variables from their outer scope.

// Closure Simple - A Function and all the variables
// which function can take and use


// Analogy:
// Think of lexical environments as nested boxes. 
// Each box represents a scope, and inside each box are variables and functions. 
// If you need to find something, you look inside the current box first. 
// If it's not there, you look in the box that contains the current box and so on.


//Why it's important:
// Variable Scope:
// It defines where variables can be accessed, 
// preventing naming conflicts and allowing for data encapsulation.

// Closures:
// It makes closures possible, enabling powerful 
// programming patterns like function factories and private variables.

// Understanding Execution:
// It helps understand how JavaScript 
// code is executed and how variables are resolved, 
// which is essential for writing efficient and bug-free code.




// ! MY TIP ABOUT CLOSURE
// CLOSURE purpose - Freeze UpLvlAbstraction (calculated on fly) data 
// for able to LowLvlAbstraction instance with its specific data
// React case:
// Custom hooks, for example:
// On High Abstraction level We activate and prepare some object 
// from LIBS with some current Project High Level Data, and after that 
// we can use prepared libs stuff into 
// other target down-level places with local arguments

function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  var twice = multiplier(2);
  console.log(twice(5));
  // → 10


// Closure for incapsulation (Caps first letter because function like OOP class)
function Counter() {
    let count = 0
    return {
        increment() { count++ },
        getCount() { return count}
    }
}

const ClosureCounter1 = Counter()
const ClosureCounter2 = Counter()

ClosureCounter1.increment()
ClosureCounter1.increment()
console.log(ClosureCounter1.getCount())
console.log(ClosureCounter2.getCount())




function IncDecCounter(mode = 'inc') {
    let incDecCount = 0

    function incDec () {
        if(mode === 'inc') {
            incDecCount++
        } else {
            incDecCount--
        }
        return incDecCount
    } 
    return incDec
}

const incDecOne = IncDecCounter()
const incDecTwo = IncDecCounter()
const incDecModeDec = IncDecCounter('dec')

let incDecOneFirstIter = incDecOne()
console.log(incDecOneFirstIter)
incDecOneFirstIter = incDecOne()
console.log(incDecOneFirstIter)

let incDecTwoFirstItem = incDecTwo()
console.log(incDecTwoFirstItem)

let incDecModeDecFirstInstance = incDecModeDec()
console.log(incDecModeDecFirstInstance)


// LEXICAL ENVIRONMENT -> scopes, blocks { }
for (let i = 0; i < 5; i++) {
    let b = 15
    for (let j = 0; j < 5; j++) {
        let n = 5
    }
    console.log(b)
    // log(b) - ok

    console.log(n) // ERROR n is not defined
    // becouse log don't have access to other inner lexical environment 
}