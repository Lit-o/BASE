// clean start
// npm i typescript -D
// npx tsc --init

// local use
// npx tsc ./TypeScript.ts   
// npx ts-node TypeScript.ts
// runtime



// Primitives
// 7 primitives: number, string, boolean, null, undefined, BigInt, Symbol
const a = 5
// a type not number, but 5

let b:number = 15
let c:string = 'string'
let d:boolean = true
let e:null = null
let f:undefined = undefined

let num = 5
// num self typed to number
num = -5
console.log(num)
num = 1.2
console.log(num)



// Func (and obj interface)
interface User {
    name: string,
    // optional props
    id?: number
}

function setUser(userName: string, id:number): User {
    return {id, name: userName}
}

function logUser(user:User): void {
    console.log(user)
}

type sumFunc = (a: number, b: number) => number
                  //???
const sum:sumFunc = () => {
    return a + b
}
sum(a, b)

const arrSum = (a: number, b: number): number => { return 4 }

async function AsyFunc(num:number): Promise<number> {
    return 5
}



// Array
const Arr = [2,4,5]

type ArrT = number[]
let ArrTE: ArrT = [2,3,'4']

type ArrGen = Array<string>
let ArrTG:ArrGen = ['a', 'b', 5]
for (const El of ArrTG) {
    console.log(El.toUpperCase())
}

type ArrMix = (number | boolean)[]
let ArrMixI:ArrMix = [1,2, true, 'true']


// Tuples
type ArrTyp = [1, 2, 'yes', number]
const ArrTuples:ArrTyp = [1, 2, 'string', 12]

const TuplesArr:['aaa', number, 'bbb'] = ['aaa', 55, 'bbb']

const TuplesWithSpread: ['aaa', number, ...any[]] = ['aaa', 4, '5', '22', 5]

//readonly
const ReadOnlyArr: readonly['aaa', 5, 'bbb', number] = ['aaa', 5, 'bbb', 12 ]
ReadOnlyArr[3] = 1

const readOArr: ReadonlyArray<string> = ['a', 'b', 'c']
readOArr[3] = 1
readOArr.push('a')



// ENUM
// transform to JS func under hood
enum dictionaryExample {
    PERSONE1_AUTO_INDEX_0,
    PERSONE2_AUTO_INDEX_1,
    PERSONE3_CUSTOM_INDEX_5 = 5,
    PERSONE4_AUTO_INDEX_6,
    PERSONE5_CUSTOM_INDEX_B = 'B',
    PERSONE6_AUTO_INDEX_6, //error
}

// live only on compile flow
const enum dictionaryExampleConst {
    ONE = 1,
    TWO = 2
}




// Union
const arr:(string | number)[] = [1, '2']

function logId(id: string | number) {
    //Narrowing
    if(typeof id === 'string') {
        console.log(id.toLowerCase() + ' string')
    } else {
        console.log(id.toFixed(2) + ' number')
    }
}
logId(1.1111111)
logId('one')


function arrOrString(data: string | string[]): void {
    if (Array.isArray(data)) {
        data.forEach(el => console.log(el))
        console.log('this is array')
    } else {
        console.log('string')
    }
}
arrOrString(['aaa', 'bbb'])


function logObj(data: {a: number} | {b: string}) {
    if ('a' in data) {
        console.log(data.a)
    } else {
        console.log(data.b)
    }
}




// Literal Types
const aLit = 1
let bLit: 5 = 5

function fetchData (url: string, method: 'post' | 'get') {
}
let met = 'post'
fetchData('A', met as 'post')

function fetchDataNum (url: string, method: 1 | 2): 1 | 15 {
    return 15
}
fetchDataNum('A', 1)



type colors = 'red' | 'green' | 'gold'
type colorsNumbers = 'red' | 'green' | 'gold' | 1 | 2
function paint (c:colors) {

}
paint('red')

const color2 = 'green'
paint(color2)


// Error
const dataColor1 = {
    color1: 'red'
}
paint(dataColor1.color1)

// fix Error
const dataColor2 = {
    color1:  'green' 
} as const
paint(dataColor2.color1)


type EventName = 'Click' | 'Change'
type EventHandler = `on${EventName}`

type userID = `user_id_${string}`





// Type Aliases
type httpM = 'post' | 'get' | 'put' | 'delete'

type UserAlias = {
    name: string,
    id: number
}

type Role = {
    role: 'one' | 'two'
}
// \ - union,                 & - INTERSECTION
type UserWithRole = UserAlias & Role

type UserWithRole2 = {
    user: UserAlias,
    readonly role: Role
}

type doSomething = (a: number) => void

//generic
type APIResponse<T> = {
    status: 'success' | 'error',
    data?: T
}



// Interface
interface Objecto {
    one: number,
    readonly two?: string
} 

interface ObjectoWithRole extends Objecto {
    role?: 'YES'
}

let objo: ObjectoWithRole = {
    one: 1,
    two: 'two',
    role: 'YES'
}


interface Role2 {
    role: 'YES2'
}
interface ObjectoWithRole2WithDate extends Objecto, Role2 {
    createdAt: Date
}

// type Record like, utility types
interface UserDict {
    [index: string]: User
}
type ud = Record<string, User>



// SPECIAL TYPES
// any unknown never void

// unknown - safety any
function logDataErr (data:unknown) {
    // error!
    let value: string = data
}

function logData (data:unknown) {
    let value: string
    if (typeof data === 'string') {
        value = data
    }
}




// GENERICS
// like args to functions

interface userG {
    name: string,
    id: number
}

interface productG {
    prodName: 'product' | 'stuff',
    id: number
} 

interface APIResponseG<T> {
    status: 'success' | 'error',
    id: number
    data?: T
}


function getUserGData ():APIResponseG<userG> {
    return {
        id: 5,
        status: 'success',
        data: {id: 4, name: 'Neo'}
    }
}

function getProdGData ():APIResponseG<productG> {
    return {
        id: 5,
        status: 'success',
        data: {id: 4, prodName: 'product'}
    }
}




// strange
type per = {age:number, name: string}

const logPer = (per:per) => {
    console.log(per)
}

//id ERROR
logPer({age: 15, name: 'Neo', id: 5})

//id FINE
const persone = {age: 15, name: 'Neo', id: 5}
logPer(persone)
// becouse structure language

//id ERROR
const persone2:per = {age: 15, name: 'Neo', id: 5}
logPer(persone)

const persone3:per = {
    age: 15,
    name: 'Neo', 
    ...{id: 5}
}
logPer(persone)