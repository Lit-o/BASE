"use strict"
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


let aC = 1, bC = 2
console.log(aC < bC)
console.log(aC > bC)
console.log(aC <= bC)
console.log(aC >= bC)
console.log(aC != bC)
console.log(aC !== bC)


// Short-Circuiting
// 0, '', null, undefined, NaN -> FALSE
let sc1 = true || 'heavy function that even doesn\'t started'
console.log(sc1)
let sc2 = false && 'heavy function that even doesn\'t started'
console.log(sc2)

let scD = false || 'Default settings'

let scC = 'check fine' && 
'condition - true' 
&& true && 'Action that we needed after all success checks'

// ! AND && OR || ----------
console.log(2 && 1 && null && 0 && undefined) // -> null
// return first false or first false-like value(0,'', null, undefined, NaN), 
// if all true -> return the rightmost(final) value


console.log(null || 0 || undefined) // -> undefined
// return first true or first true-like value
// if all false -> return the rightmost(final) value

console.log(55 || 2 && 0 || 4) // -> 55
console.log((55 || 2) && 0 || 4) // -> 4
// && > || -> first priority - && and second priority - ||




// ---------- LOOPS & CONDITIONS LOOPS & CONDITIONS LOOPS & CONDITIONS LOOPS & CONDITIONS

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


let do1while = 0
//at least do once
do {
    do1while++
    console.log(do1while)
} while (do1while < 10)


let ifTip = 12
if (ifTip < 5) {
    console.log('ifTip < 5')
} else if (ifTip > 5 && ifTip < 10) {
    console.log('ifTip > 5 && ifTip < 10')
} else (
    console.log('ifTip >= 10')
)


let switchResult = (switchTip) => {
    switch (switchTip) {
        case 12:
            console.log('match 12')
            return 'twelve'

        case 14:
            console.log('match 14')
            // break return undefined
            break
            // return 'fourteen'

        case 15:
        case 16:
            return ('15 or 16')

        default:
            console.log('match not found')
            return 'not found'
    } 
}
console.log(switchResult(15))
// ---------- END - LOOPS & CONDITIONS 




// ---------- FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS 

//Function Declaration (Hosting)
function wakeUp1 () {
    return 'Neo...'
}

// Function Expression  ; - needed
const wakeUp2 = function () {
    return 'Neo...'
}

// Function Arrow (don't have *this*, have many tricks)
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

// Don't break line after return, at least add ( )
const returnBLTip = (n = 0) => {
    return (
        5 + 5 + n
    )
}

// function call => return something 
// and this specific instance call result we can linked to variable
const ten = returnBLTip()
const eleven = returnBLTip(1)
console.log(ten)
console.log(eleven)

// Callback - when we neet our specific queue of func calls
function Callback1 () {
    setTimeout(()=>{
        console.log('Callback1', 'delay 500')
    }, 500)
}

function Callback2 () {
    console.log('Callback2')
}

// Callback template - when function take another function as argument
// and call it in queue that needed 
function CallbackQueue (arg, callback) {
    setTimeout(()=>{
        console.log('Callback Queue ', arg, ' delay 500')
        callback()
    }, 500)
}

CallbackQueue(5, Callback2)

// CLOSURE SCOPE LEXICAL ENVIRONMENT lexical environment

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

// ! TIP CLOSURE
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


// ---------- FUNCTIONS - END





// ---------- STRINGS STRINGS STRINGS STRINGS STRINGS STRINGS

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

let trimedText = '   Wake .  '
console.log(trimedText)
console.log(trimedText.trim())
// ---------- STRINGS - END





// ---------- NUMBER NUMBER NUMBER NUMBER NUMBER NUMBER

// Number tips
const num = 15.25

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

const numString = '15.55px'
console.log(parseInt(numString))
console.log(parseFloat(numString))
console.log(typeof(parseFloat(numString)))

const qNum = '12'
const qNumNum = +qNum
console.log(typeof(qNumNum))
// ---------- NUMBER - END




// ---------- OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS

{
const objTip = {
    a: 5,
    b: 15,
    c: {
        wake: 'Up',
        Neo: '...'
    },
    d: [11,22,33],
    delProperty: 'unnecessary data',
    makeSomething: function () {
        console.log('Wake up')
    }
}

delete objTip.delProperty
console.log(objTip)

//for in
for (let key in objTip ) {
    if (typeof(objTip[key]) === 'object') {
    console.log(`key ${key} -`)
        for (let keyIn in objTip[key]) {
            console.log(`   key ${keyIn} - ${objTip[key][keyIn]}`)
        }
    } else {
        console.log(`key ${key} - ${objTip[key]}`)
    }
}


console.log(Object.keys(objTip).length)


objTip.makeSomething()


// DESTRUCTURING OBJ ES6 
// classic Dest
const {a, b} = objTip

// rename on fly Dest
const {wake:wake1, Neo:Neo1} = objTip.c
console.log('dest1', wake1, Neo1)

// deep Dest
const {c: {wake, Neo}} = objTip
console.log('dest', wake, Neo)

}
// ---------- OBJECTS - END 





// ---------- ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS

const ArrTip = ['1', 2, 3, 4]

// Mutate array by del last elem and return this elem 
const lastElem = ArrTip.pop()
console.log(ArrTip)
console.log(lastElem)

// Mutate array by adding new elem to the end
ArrTip.push(4)
console.log(ArrTip)

// Rare becouse heavy methods "shift" as del and "unshift" as add
// with start of array (like 'pop' and 'push') 


// del 3rd elem
// delete ArrTip[2]


// 'splice'
// del from index count of elements and implement newElements
// ArrTip.splice(index, count, newElements)


// 'slice' create new array from start to end(start index included / end index not included)
const newArr = ArrTip.slice(0, ArrTip.length - 2)
const newArr2 = ArrTip.slice(2)
console.log(newArr)


// 'sort' need sort func, mutate arr
// sort under the hood have quicksort algo
const sortArr = [12, 5, 3, 1, 7, 15]
const compareNum = (a, b) => a - b
sortArr.sort(compareNum)
console.log(sortArr)


// 'reverse'
newArr.reverse()


// 'concat' make new copy of array and add (argsElem)
const newNew = newArr.concat('b','c')
console.log(newNew)


for (let i = 0; i < ArrTip.length; i++) {
    console.log(ArrTip[i])
}

// for of working with array, strings, pseudo-array(DOM arrays of elem that doesn't have array methods)
// break and continue wellcome if needed
for (let elem of ArrTip) {
    console.log('for of', elem)
}

// forEach, map(make new arr), some, every, reduce, filter(make new arr) 

// forEach
// Unlike map(), forEach allways return undefined
// and it's not chainable
// Typical use case is to execute side effects at the end of the chain

// There is no way to stop or break a forEach() loop other than by throwing an exception
// break and continue not allowed

// Array methods like every(), some(), find(), and findIndex() 
// also stops iteration immediately when further iteration is not necessary.

// forEach() expects a synchronous function — it does not wait for promises. 
// Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.
ArrTip.forEach((element, i, ArrTip) => {
    return element + 'forEach mod'
});


// 'split' make Array from String
const str = 'Wake up, Neo...'
console.log(str.split(' '))
console.log(str.split(''))

// 'join' make String from Array
const strSum = str.split('').join('!')
console.log(strSum)


// Broke Array.length
ArrTip[8] = '9'
console.log(ArrTip)

//Check broken Array.length
if (Object.keys(ArrTip).length === ArrTip.length) {
    console.log('array length fine')
} else {
    console.log('array length broken')
}


// Fix Broken Array
const ArrBr = [22,33,44,55]
ArrBr[9] = 99
const ArrFx =[]

// for (let ArrBrelem of ArrBr) {
//     console.log(ArrBrelem)
// }

for (let ai = 0; ai < ArrBr.length; ai++) {
    if(ArrBr[ai] === undefined) {
        ArrFx[ai] = 'Empty item' 
    } else {
        ArrFx[ai] = ArrBr[ai]
    }
}

console.log(ArrFx)
// ---------- END - ARRAYS 




// ---------- (SPREAD) COPY VALUE OR LINK AND SPREAD OPERATOR - COPY VALUE OR LINK AND SPREAD OPERATOR 
{
    // PRIMITIVES COPY BY JUST VALUE AND DON'T HAVE EFFECTS TO EACH OTHER
    let a = 5,
        b = a
    b = a + 10
    console.log(a, b)

    // OBJECTS COPY BY LINK AND CHANGE EACH OTHER
    const objA = {a: 5, b: 10}
    const objB = objA
    objB.a = 1
    objA.b = 12
    objB.c = 15
    console.log(objA)
    console.log(objB)

    // shallow and deep copy (SPREAD (ARR ES6, OBJ (ES9 2018)))
    // SPREAD operator 'open and return' shallow data from ARRAY or OBJECT
    const ObjShallowCopyByObjSpreadES9Operator = {...objA, 'AddSomeNewData': 5}
    ObjShallowCopyByObjSpreadES9Operator.b = 1
    console.log(objA)
    console.log(ObjShallowCopyByObjSpreadES9Operator)

    const arrSum = [5, 11, 12]
    function spreadSum (a,b,c) {
        console.log(a + b + c)
    }
    spreadSum(...arrSum)
    // !!! OBJ DOESN'T WORKING LIKE THAT
    // const objSum = {a: 5, b: 5, c: 5}
    // spreadSum(...objSum) 

    const arr1 = [2, 4, 5, {a:5,b:5}]
    const shallowArr1 = [...arr1]
    shallowArr1[0] = 0
    shallowArr1[3].a = 0
    console.log(arr1)
    console.log(shallowArr1)
}
// ---------- END










// ---------- REGEXP REGEXP REGEXP REGEXP REGEXP REGEXP REGEXP

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
// ---------- REGEXP 









// ---------- OTHER STUFF OTHER STUFF OTHER STUFF OTHER STUFF OTHER STUFF

// ---------- Debug
// gooDevTools -> Sources -> myScript.js -> Breakpoints
const debug1 = () => {
    console.log('stop')
    debugger
}







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



console.log(Math.ceil(62.1))
console.log(Math.floor(62.99999))

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







// ---------- PROTOTYPES
{
    const starter = {
        begin: function () {
            console.log('Let\'s something begin!')
        }, 
        end: ()=>{console.log('end')}
    } 

    const launcher = Object.create(starter)
    const firestarter = {begin:()=>{console.log('Ama FIRESTARTA')}}
    
    Object.setPrototypeOf(firestarter, starter)

    launcher.begin()
    firestarter.begin()
    firestarter.end()
}




// ---------- SPICY TIPS 
{
    let A = 5

    console.log(A++)
    //A++ operation 
    //Return current-A-state(5), and after that update-A-variable with +1(6)
    
    console.log(--A)
    // Return new state(4) and update A variable with new state(4)



    // ----------
    // EMPTY ARRAY WITH CONCATINATION (+) TRANSFORM TO ""
    console.log(typeof([] + 2)) // -> STRING!

    console.log([] + false) // -> 'false' as STRING!
    //Return 'false' as string, becouse [] with + transform to empty string
    // and empty string have concat + to other operants

    console.log([] + false - null + true) // -> NaN ('false' - null)

    console.log(typeof([] + 1 + 2)) // -> '12' as a string



    // ----------
    let y = 1
    let x = y = 2
    console.log(x) // -> 2
    // y = 2 -> x = y -> log(x) -> 2



    // ----------
    console.log('1'[0]) // '1' as a string



    // ! AND && OR || ----------
    console.log(2 && 1 && null && 0 && undefined) // -> null
    // return first false and false-like value(0,'', null, undefined, NaN), 
    // if all true -> return the rightmost(final) value
    
    
    console.log(null || 0 || undefined) // -> undefined
    // return first true and true-like value
    // if all false -> return the rightmost(final) value
}

// UNICODE CHARACTERS COMPARE
// русские буквы А - 1040, Б - 1041 ... а - 1072, б - 1073...
// особенности Ë и ё - Я - 1071 Ë - 1025, я - 1103, ё - 1105
console.log('a' > 'я')


// CONSOLE.DIR for WEB
console.dir(querySelectorAll('.someClass'))
// dir - in web browser can return 
// info about element - data and its methods 