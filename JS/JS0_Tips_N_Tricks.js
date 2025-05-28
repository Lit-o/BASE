{
    let one = 1
    const two = 'two' 
    console.log(one)
}
    console.log(three) // three hosting and exist but undefined
    var three = ['3']

    console.log(two) // cant see const two becouse scope out of block 


const NeoString = 'Wake up, Neo...'
console.log(
    (NeoString.length)
)
console.log(
    NeoString.toUpperCase()
)

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
function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  var twice = multiplier(2);
  console.log(twice(5));
  // → 10

// Freeze UpLvlAbstraction context data for able to reference a specific instance
// I know 2 React common cases:
// 1) Custom hooks, for example:
// On High Abstraction level We activate and prepare some object 
// from LIBS with some current Project Hugh Level Data, and after that 
// we can use prepared libs stuff in other target down-level places with local arguments
// 2) JSX ---> <Button onPress={()=>{ doSomethingInCustomSecondPlace(2) }} ...


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
