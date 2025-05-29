// A New standardized version of JS - ES6 2015 
// (let const, ... , arrow func, and other stuff)

{
    let one = 1
    const two = 'two' 
    console.log(one)
}
    console.log(three) // three hosting and exist but undefined
    var three = ['3']

    console.log(two) // cant see const two becouse scope out of block 

const obj = {
    Viva: 10,
    'La Vida': 20,
}
let l='La ',v='Vida'

console.log(obj.Viva)
console.log(obj['La Vida'])
console.log(obj[l + v])

let a = 'a'
`interpolation is ${a} dynamic string` // Template literals or Template strings


let incr = 5
let decr = 5
console.log(incr++)
console.log(decr--)
console.log(++incr)
console.log(--incr)

let a1 = 5
a1 *= 2
a1 += 1
a1 -= 2
a1 /= 4
a1 %= 2
console.log(a1)


// Short-Circuiting
let sc1 = true || 'heavy function that even doesn\'t started'
console.log(sc1)
let sc2 = false && 'heavy function that even doesn\'t started'
console.log(sc2)

let scD = false || 'Default settings'

let scC = 'check fine' && 
'condition - true' 
&& true && 'Action that we needed after all success checks'


// loop mark
first: for (let i = 0; i < 7; i++) {
            console.log('i -', i)
            for (let j = 0; j < 5; j++) {
                console.log('j -', j)
                for (let k = 0; k < 5; k++) {
                    console.log('k -', k)
                    if (k === 3) continue first
                }
            }
}

first: for (let i = 0; i < 4; i++) {
    console.log('i -', i)
    second: for (let j = 0; j < 3; j++) {
        console.log('j -', j)
        for (let k = 0; k < 5; k++) {
            console.log('k -', k)
            if (k === 1) continue second
            if (k === 2) break first
        }
    }
}

//Function Declaration (Hosting)
function wakeUp1 () {
    return 'Neo...'
}

// Function Expression  ; - needed
const wakeUp2 = function () {
    return 'Neo...'
}

// Function Arrow (don't have this, have many tricks)
const wakeUp3 = () => {

}
// one line function body doesn't need block { }
const arrowTrick1 = (a, b) => a * b
const arrowTrick2 = a => a * 5

// quick return obj need ( )
const arrowTrick3 = a => ({wake: 'up' + a})
console.log(typeof(arrowTrick3(' Neo...')))

// Console.log('some') - is function. 
// function on js ALLWAYS return something, at least undefined
// so console.log('some') make side effect - 'some' on terminal and 
// return undefined too

// Don't brack line after return, at least add ( )
const returnBLTip = () => {
    return (
        5 + 5
    )
}


//String Tips
let str1 = 'Wake up, Neo...'
console.log(str1.length)

// toUpperCase return new string. str1 still the same
let str2 = str1.toUpperCase()
let str3 = str1.toLowerCase()

console.log(str3.indexOf('neo'))
console.log(str3[5])

//Slice. First param in, last param out
console.log(str3.slice(5))
console.log(str3.slice(5, 10))
console.log(str3.slice(-5, -2))

// number to string
let strNumber = 123
strNumber += ''
console.log(typeof(strNumber))


// Number tips
const num = 15.25

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

const numString = '15.55px'
console.log(parseInt(numString))
console.log(parseFloat(numString))
console.log(typeof(parseFloat(numString)))






const Str1 = '1234'
console.log(
    typeof(+Str1)
)
console.log(
    Number(Str1)
)
console.log(
    String(+Str1)
)
console.log(
    Boolean(Str1)
)

console.log(
    (44 / '22')
)
// -> 2

console.log(
    isNaN(45 / 'yep')
)
// -> true

console.log(
    'con' + 'cat'
)
// -> concat

// Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('«FizzBuzz»')
    } else {
        console.log(i)
    }
}


const ChessFieldVer1 = (size = 8) => {
    let lineArr = []

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++ ){
            let firstElem = i % 2 === 0 ? '#' : ' '
            let secondElem = i % 2 === 0 ? ' ' : '#'

            if (j % 2 === 0) {
                lineArr.push(firstElem)
            } else {
                lineArr.push(secondElem)
            }
            if (j + 1 === size) {
                lineArr.push('\n')
            }
        } 
    }

    console.log(lineArr.join(''))
}
ChessFieldVer1(12)


const landscape = function() {
    let result = "";
    const flat = function(size) {
      for (let count = 0; count < size; count++)
        result += "_";
    };
    const mountain = function(size) {
      result += "/";
      for (let count = 0; count < size; count++)
        result += "'";
      result += "\\";
    };
  
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
  };
  console.log(landscape());


// ! TIP
// Func Declaration ONLY into Global Scope, or other Function Scope
// Func Declaration NOT allowed into if(){} or for/while(){}
function example() {
    function a() {} // Fine
        if (something) {
            function b() {} //WRONG!
        }
        while (something) {
            function b() {} //WRONG!
        }
}


// ! TIP CLOSURE
// CLOSURE purpose - Freeze UpLvlAbstraction (calculated on fly) data 
// for able to LowLvlAbstraction instance with its specific data
// React case:
// Custom hooks, for example:
// On High Abstraction level We activate and prepare some object 
// from LIBS with some current Project Hugh Level Data, and after that 
// we can use prepared libs stuff in other target down-level places with local arguments

function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  var twice = multiplier(2);
  console.log(twice(5));
  // → 10


// ! TIP RECURSION
function recursionPower(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * recursionPower(base, exponent - 1);
  }
  
  console.log(recursionPower(2, 5));

// JS recursion implementations, it’s about ten times 
// slower than the looping(for)
// Often Recursion needed when we have task that require exploring 
// or processing several branches, each of which can have more branches

console.log(Math.ceil(62.1))
console.log(Math.floor(62.9999))

console.log(Math.floor(Math.random() * 100 + 1))
//chance 1 to 100
console.log(Math.floor(Math.random() * 2 + 1))

console.log(Math.ceil(Math.random() * 4)) 
console.log(Math.ceil(Math.random() * 100))
//chance 1 to 2

// My Recursion example
let whatIHave = 4

const giveMeMore = (goal) => {
    if (whatIHave >= goal) {
        console.log('Now i Have what i want!')
        return whatIHave
    } else {
        console.log('recursion tick') 
        whatIHave++
        giveMeMore(goal)
    }
}

giveMeMore(15)
console.log('What i have now is -',whatIHave )


// Sum range
console.log(sum(range(1, 10)));

function range (start, end) {
    const biggest = start < end ? end : start
    const smallest = start > end ? end : start
    let array = []
    
    for (let i = smallest; i <= biggest; i++) {
        array.push(i)
    }
    
    return array
}

function sum (array) {
    return array.reduce((a,b) => a + b)
}


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


// Validation for input user Name with RegExp
const regexValidationFindExceptions = /[^a-zA-Z0-9\s]/

function validator(e) {
    const exceptionsMatches = regexValidationFindExceptions.exec(e); // either an array or null
    const isExceptions = Boolean(exceptionsMatches);

    if (!isExceptions) {
        console.log('go')
    }  else {
        console.log('stop')
    }
}

validator('fdf55^%#')
validator('fdf5')
validator('fdf5 fdf')
