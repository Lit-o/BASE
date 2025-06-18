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
console.log(`interpolation is ${a + 5 > 12 / 6 +'' && 'dyn'} dynamic string`) 
// Template literals or Template strings


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
// say simple - Recursion good pattern for working with trees
// say advanced - Recursion good pattern for working 
// with unknown structure trees


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


// Big stringcut
const bigString = '1234567891012abcd'
const bigStringCut = `${bigString.slice(0,7)}...`
console.log(bigStringCut)


// number to string
let strNumber = 123
strNumber += ''
console.log(typeof(strNumber))

let trimedText = '   Wake .  '
console.log(trimedText)
console.log(trimedText.trim())

let emptyArrayWithConcatGotoStrings = [] + 5
console.log(emptyArrayWithConcatGotoStrings)
console.log(typeof(emptyArrayWithConcatGotoStrings))
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

const toFixedNum = 15.12345678
console.log(toFixedNum.toFixed(4))
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


// 3 ARRAYS RETURN FROM OBJ METHODS 
console.log(Object.keys(objTip).length)
// return array of properties names as string

console.log(Object.values(objTip))
// Object.values() working like spread operator, return array of values, 
// working like for .. in, but for .. in can return proto keys and values

console.log(Object.entries(objTip))
console.log(Object.fromEntries(objTip))
// retunr array like -> [['key1','value1'],['key2','value2']]



// ASSIGN like Spread
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);

target.a = 5

console.log(returnedTarget);
// Expected output: true



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

//SPREAD ES9 Operator
const firstObj = {a:5,b:5, c: 'five', d:{a:5, b:5, c: {innerC1:1, innerC2:2 }}}
const shallowCopyObj = {...firstObj}
const deepCopyObj = {...firstObj, 
    d: {...firstObj.d,
        c: {...firstObj.d.c}
    }
}
const JSONTricDeepCopy = JSON.parse(JSON.stringify(firstObj))

firstObj.a = 15
firstObj.d.a = 20
firstObj.d.c.innerC1 = 20

console.log(firstObj)
console.log(shallowCopyObj)
console.log(deepCopyObj)
console.log(JSONTricDeepCopy)


// ADVANCED OBJECT STUFF 
let objUser = {
    name: 'Neo',
    age: 30,
    'The Matrix': 'has you...'
}

console.log(Object.getOwnPropertyDescriptor(objUser, 'name'))
// writable 
// by default = true
// enumerable
// by default = true
// configurable
// by default = true

Object.defineProperty(objUser, 'The Matrix', {writable: false, enumerable: false, configurable: false})

//Create new prop
Object.defineProperty(objUser, 'wake', {value: 'wake up, Neo...', writable: false, enumerable: true})

//TypeError: Cannot redefine property: The Matrix
Object.defineProperty(objUser, 'The Matrix', {writable: true, enumerable: true, configurable: true})

// writable 
// When create by Object.defineProperty by default = false
// enumerable
// When create by Object.defineProperty by default = false
// configurable
// When create by Object.defineProperty by default = false

// When 'configurable' : false => after that even defineProperty doesn't work

console.log(objUser)


//Close object to extend with new props
Object.preventExtensions({a:1})

// make obj read-only
Object.freeze({a:1})

// Close object to extend with new props,
// close current props for settings,
// but allow change values
Object.seal({a:1})

Object.isExtensible()
Object.isFrozen()
Object.isSealed()

// Object.is - A boolean indicating whether or not the two arguments are the same value.
// like ===
console.log(Object.is(5, 5))

//map
const objMaped = {
    aObj: {a:1},
    b:2
} 
const myMap = new Map

myMap.set(objMaped.aObj, 15)

console.log(myMap)
// ---------- OBJECTS - END 





// ---------- ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS

const ArrTip = ['1', 2, 3, 4]

console.log(Array.isArray(ArrTip))

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

const filtered5Down = [6,7,4,2,6,7,8,1,4,2,1].filter((el,i) => {
    // we need create callback func that return true or false on each iteration for all elements
    // when we return true, element go to new array, when return false we skip element
    return el < 5
})
console.log(filtered5Down)

// every/some -> return true/false
// take info about array. Is every or some element meet the condition?
const everySome = ['1', '2', 3, 4]
console.log(everySome.every(el => typeof(el) === 'number'))
console.log(everySome.some(el => typeof(el) === 'number'))


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


// Set
const arrSet = [1,1,1,2,2,3,4,5,5]
const clearDoubles = new Set(arrSet)
console.log(clearDoubles)
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
    const unnecessaryDefaulStartValue = 5
    return array.reduce((sum,current) => sum + current, unnecessaryDefaulStartValue)
}
console.log(sum([5,5,5,5]))


// Array Chaining
const testObj = {
    boris: 'human',
    ann: 'human',
    jim: 'dog',
    syssy: 'cat'
}

const humanNames = 
    Object.entries(testObj)
    .filter(el => el.some(el => el ==='human'))
    .map(el => el[0])
    .map(el => el[0].toUpperCase() + el.slice(1))

console.log(humanNames)






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


// ??  ES11 2020 Nullish -> ??
// ?? like || but watch only null or undefined as false, 
// other false-like stuff even false-itself take as true
console.log(null ?? 5) // -> 5
console.log(undefined ?? 5) // -> 5
console.log(false ?? 5) // -> false
console.log(0 ?? 5) // -> 0
// Caution!  ?? can't be used with && or ||


// ?.  ES11 2020 - Optional Chaining Operator
// old solution
if (obj && obj.data && obj.data.objPropertyWeNeededIfItHas) {
    console.log(obj.data.objPropertyWeNeededIfItHas)
}
// left side check for 'undefined' or 'null' 
// and stop this operation if find them 
obj?.data?.innerProps

obj?.someMethod?.()
// if obj doesn't exist, return 'undefined'
// without error and breaking code flow


//Advanced OBJECT Type detect
console.log(Object.prototype.toString.call({a:4,b:2}))
console.log(Object.prototype.toString.call([4,2]))
console.log(Object.prototype.toString.call('a:4,b:2'))
console.log(Object.prototype.toString.call(4))
console.log(Object.prototype.toString.call(NaN))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(null))



// Time

const timer1 = setTimeout((data)=>{
    console.log(data)
}, 500, 'text')

function logger(data,data2) {
    console.log(data, data2 + '')
}
                         //func,     time delay,   args for func
const timer2 = setTimeout(logger,       1000,           '4')
const timer3 = setTimeout(logger,       1000,       '5', 'undef')
clearTimeout(timer2)


let globalInterval

const startTimerInterval = () => {
    globalInterval = setInterval(logger, 500, 'tic', 'tac')
}

startTimerInterval()

clearInterval(globalInterval)



function logger2(data,data2) {
    console.log(data, data2 + '')
}

let recursionTimeout = setTimeout(function loop(t,t2){
    //body of function
    logger2(t, t2)
    // loop settings
    // recursionTimeout = (setTimeout((t)=>{loop(t)}, 500, t))
    recursionTimeout = (setTimeout(loop, 500, t, t2))
}, 500, 'recursionTimeTest', 'tdata')


setTimeout(()=>{
    clearTimeout(recursionTimeout)
}, 5000)
// Recursion setTimeout can be better than setInterval for special case
// Becouse setInterval doesn't care about how long function work
// (for example big heavy logger)
// setInterval just STARTED function every time Tick
// Recursion setTimeout whait setTimeout body work done and start new iteration




// Date
const myDateNow = new Date()
console.log(myDateNow)
//2025-06-16T07:49:18.038Z  -> UTC output


// input typeDate HTML5 can give Date string from web client
const myDateFromString = new Date('2025-06-16')
// old way of declaration by string Date.parse('2025-06-16')
const myDateFromString2 = new Date(Date.parse('2025-06-16'))
console.log(typeof(myDateFromString))


// month enumerate start from 0 ..to.. 11 in the input param mode
const myDateFromParam = new Date(2025, 6, 16, 20)
console.log(myDateFromParam)

// GMT, Greenwich Mean Time, GMT
// UTC, Coordinated Universal Time, UTC
// GMT and UTC are the same, the difference about seconds


// milliseconds start from 1970
const myDateZero = new Date(0)
console.log(myDateZero)


// Get date info
const myDateNowGet = new Date()
console.log(myDateNowGet.getFullYear())
console.log(myDateNowGet.getMonth()) // from 0 to 11
console.log(myDateNowGet.getDate()) // get day from 1 to ~30
console.log(myDateNowGet.getDay()) // get day of week, sunday is 0, saturday is 6

console.log(myDateNowGet.setDate(15, 21, 14)) // set day num first param, next hours, minutes

// Get UTC
console.log(myDateNowGet.getUTCHours()) // get UTC time
console.log(myDateNowGet.getHours()) // get local time

console.log(myDateNowGet.getTimezoneOffset()) // difference in minutes

console.log(myDateNowGet.getTime()) // timestamp 

// benchmark
let start = new Date()

for (let i = 0; i < 500000; i++) {
    let data = i + 12345
}

let end = new Date()
console.log(end - start)


// TIMER
const deadline = ('2025-06-30')

function getTimeRemaining(endtime) {
    const msTime = Date.parse(endtime) - Date.parse(new Date()),
          day = Math.floor(msTime / 1000 / 60 / 60 / 24 ),
          hour = Math.floor((msTime / 1000 / 60 / 60) % 24)
          minutes = Math.floor((msTime / 1000 / 60 ) % 60)
          second = Math.floor((msTime / 1000 ) % 60)
        //   second = Math.floor((msTime / 1000 / 60 / 60) % 24)
         

    return {msTime, day, hour, minutes, second}
}
console.log(getTimeRemaining(deadline))



// THIS THIS THIS
// 1) THIS - func window or undefined
// 2) THIS - into objects methods(function deep into methods doesn't have same THIS)
// 3) THIS - class
// 4) THIS - function with call, apply, bind

// 5) THIS - arrow func doesn't have own THIS, 
// but take THIS from parent scope(useful in case 2 and deep func composition)

const thisObj = {
    abb: 'baa',
    baa: 'abb',
    conca: function () {
        console.log(this.abb + this.baa)
    }
}
thisObj.conca()


function thisFunc (a) {
    console.log(this, a)
}
//call func with tmp on fly context
thisFunc() // Err
thisFunc.call(2, 'go') // 2
thisFunc.apply(2, ['yea']) // 2


function multy (a) {
    console.log(this.hi)
    return this.mlt * a
}
// create new func with bind context
const dbl = multy.bind({hi:'hello', mlt: 2})

console.log(dbl(5))




// Classes ES6 2015
// class name starts with a Capital letter
class Shape {
    constructor(height, width) {
        this.h = height
        this.w = width
    }

    calculateArea() {
        return this.h * this.w
    }
}

const square = new Shape(4,4)

console.log(square)
console.log(typeof(square))
console.log(square.calculateArea())

class ColoredShape extends Shape {
    constructor (height, width, color){
        super(height, width)
        this.c = color
    }

    showProps () {
        console.log(this.h, this.w, this.c)
    }
}

const BSquare = new ColoredShape (10, 10, '#007')
BSquare.showProps()



// REST operator and default
// REST operator must be last param and its make array of elements after defined params
// in example after 2 args to defined param(a, b) all args going to RestElementsMustBeLast array
// if rest is empty - return empty array -> []
function restFunc (a, b = 2, ...RestElementsMustBeLast) {
    console.log(a, b, RestElementsMustBeLast)
}

restFunc('a', undefined , 5,5,5,5,5,5,5,5)




// API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF
// AJAX

// XMLHttpRequest - first obj and system for Async client-server without refresh page working
const request1 = new XMLHttpRequest()

// request1.open(method, url, async, login, pass)
request1.open('GET', 'http://www.web.com')
request1.setRequestHeader('Content-type', 'application/json; charset=utf-8')
request1.send()

// request1.status
// request1.statusText
// request1.response
// request1.readyState

request1.addEventListener('readystatechange', () => {
    if(request1.readyState === 4 && request1.status === 200) {
        console.log(JSON.parse(request1.response))
    } else if(request1.status === 404) {
        console.log('not found')
    }
})
// request1.send(bodyWhenPOST)


// load doesn't have readyState check, it's working only with complete response (success or not)
request1.addEventListener('load', () => {
    if(request1.status === 200) {
        console.log(JSON.parse(request1.response))
    } else if(request1.status === 404) { 
        console.log('not found')
    }
})

// FETCH  FETCH  FETCH  FETCH  FETCH  FETCH  FETCH 
// GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({a:5,b:15}),
    headers: {
        'Content-type': 'application/json',
    }
})
    .then(response => response.json())
    .then(data => console.log(data))


fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => console.log(data))


// Async/await ES8
async function callServer (url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({data:`${data} info`}),
        headers: {
            'Content-type': 'application/json',
        }
    })

    return await response.json()
}

// custom error

if(!someReq.ok) {
    throw new Error(`Error status ${someReq.status}`)
}



// PROMISES  PROMISES  PROMISES  PROMISES  PROMISES  PROMISES  PROMISES 
console.log('loading')

setTimeout(()=>{
    console.log('ready...')


    setTimeout(()=>{
        console.log('steady...')


        setTimeout(()=>{


            console.log('go!')
        }, 1000)
    }, 1000)
}, 1000)


const startPromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('loading')
        const promData = {a:'p-ready', b: 'p-steady', c:'GO!'}


        resolve(promData)
    }, 1000)
}) 


startPromise.then((pData) => {
    //async code
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            pData.a = 'pA-ready'
            pData.b = 'pB-steady'

            console.log(pData.a)

            resolve(pData)
        },1000)
    })
}).then((data) => {
    // sync code
    console.log(data.b)
    data.mod = 'modded'
    return data
}).then(dataIn => {
    console.log(dataIn)
}).catch(()=>{
    console.log('err')
}).finally(()=>{
    console.log('fin')
})


// When i need all my promises is done and then do something
Promise.all([myPromise1(1000), myPromise2(2000)]).then(()=>{
    console.log('do something')
})

// When i need first fastest promise is done and then do something
Promise.race([myPromise1(1000), myPromise2(2000)]).then(()=>{
    console.log('do something')
})