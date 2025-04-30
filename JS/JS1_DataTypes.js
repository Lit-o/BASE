// ----- JS TYPES of data -----
const H2_Data_types_introduction = `
Each type does its job

JavaScript is also a weakly typed, but solution is TS

VARIABLES links to data and variables data 
can be auto-converted to other type (boolean false = "", 0, NaN)

For symbols and BigInts, JavaScript has intentionally 
disallowed certain implicit type conversions

All types except Object define immutable values(primitive values) 
represented directly at the lowest level of the language

All primitive types, except null, can be tested by the typeof operator. 
typeof null returns "object", so one has to use === null to test for null
`
console.log(typeof('Wake up, Neo...'))
// - - - - - - - - - -


const H2_Corresponding_object_wrapper = `
All primitive types, except null and undefined, have their corresponding 
object wrapper types, which provide useful methods for working with 
the primitive values. For example, the Number object provides methods 
like toExponential()
`
const NeoString = 'Wake up, Neo...'
console.log((NeoString.length))
console.log((NeoString.toUpperCase()))

const Str1 = '1234'
console.log(typeof(+Str1))
console.log(Number(Str1))
console.log(String(+Str1))
console.log(Boolean(Str1))
// - - - - - - - - - -


const H2_Types_table = `
Type | typeof return value | Object wrapper
Null	    "object"	      N/A (use === null to test for null)
Undefined	"undefined"	      N/A
Boolean	    "boolean"	      Boolean
Number	    "number"	      Number
BigInt	    "bigint"	      BigInt
String	    "string"	      String
Symbol      "symbol           Symbol
^ ^ ^ Primitive unmutable values(without mutable Array, Object,(function?))

Object      "object"
function    "function"
Array       "object"
`
const testObj1 = {a:2,b:5}
const testObj2 = [2,5]
const testObj = () => {
    return 2
}
console.log(typeof(testObj1), typeof(testObj2), typeof(testObj))
// - - - - - - - - - -



const H2_Undefined_Null = `
undefined for core, null for custom programming
Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object 
(which could also make up an excuse for typeof null === "object")

A return statement with no value (return;) implicitly returns undefined.
Accessing a nonexistent object property (obj.iDontExist) returns undefined.
A variable declaration without initialization (let x;) 
implicitly initializes the variable to undefined.
Many methods, such as Array.prototype.find() and Map.prototype.get(), 
return undefined when no element is found.

Когда с одной из сторон оператора возникает null или undefined, 
он выдаёт true только если обе стороны имеют 
значение null или undefined.

console.log(null == undefined);
// → true
console.log(null == 0);
// → false
Последний пример демонстрирует полезный приём. 
Когда вам надо проверить, имеет ли величина реальное 
значение вместо null или undefined, вы просто сравниваете 
её с null при помощи == или !=
`
// - - - - - - - - - -


const H2_NaN = `
NaN ("Not a Number") is a special kind of number value (isNaN(theNumber))
that's typically encountered when the result of an arithmetic operation 
cannot be expressed as a number(result of wrong math). 
It is also the only value in JavaScript that is not equal to itself
`
// - - - - - - - - - -


const H2_Boolean = `
The Boolean type represents a logical entity and is inhabited 
by two values: true and false.

Boolean values are usually used for conditional operations, 
including ternary operators, if...else, while, etc.
`
// - - - - - - - - - -


const H2_String = `
JavaScript strings are immutable. 
This means that once a string is created, it is not possible to modify it.
String methods create new strings based on the content of the current string — for example:

A substring of the original using substring().
A concatenation of two strings using the concatenation operator (+) or concat().
`

const H2_Objects = `
Objects
In computer science, an object is a value in memory which is possibly 
referenced by an identifier. In JavaScript, objects are the only 
mutable values. Functions are, in fact, also objects with the
additional capability of being callable.
`
