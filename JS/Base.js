// ----- JS TYPES of data -----


// Each type does its job

// JavaScript is also a weakly typed, but solution is TS

// Variables links to data and variables data 
// can be auto-converted to other type (boolean false = "", 0, NaN)

// For symbols and BigInts, JavaScript has intentionally 
// disallowed certain implicit type conversions

// All types except Object define immutable values(primitive values) 
// represented directly at the lowest level of the language

// All primitive types, except null, can be tested by the typeof operator. 
// typeof null returns "object", so one has to use === null to test for null
console.log(typeof('Wake up, Neo...'))

// All primitive types, except null and undefined, have their corresponding 
// object wrapper types, which provide useful methods for working with 
// the primitive values. For example, the Number object provides methods 
// like toExponential()
const NeoString = 'Wake up, Neo...'
console.log((NeoString.length))
console.log((NeoString.toUpperCase()))


// TYPES (Primitive values(without mutable Array, Object,(function?))) 
// Type | typeof return value | Object wrapper
// Null	    "object"	         N/A (use === null to test for null)
// Undefined	"undefined"	     N/A
// Boolean	"boolean"	         Boolean
// Number	"number"	         Number
// BigInt	"bigint"	         BigInt
// String	"string"	         String
// Symbol   "symbol"	         Symbol


// undefined for core, null for custom programming
// Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object 
// (which could also make up an excuse for typeof null === "object")

// A return statement with no value (return;) implicitly returns undefined.
// Accessing a nonexistent object property (obj.iDontExist) returns undefined.
// A variable declaration without initialization (let x;) 
// implicitly initializes the variable to undefined.
// Many methods, such as Array.prototype.find() and Map.prototype.get(), 
// return undefined when no element is found.


// The Boolean type represents a logical entity and is inhabited 
// by two values: true and false.

// Boolean values are usually used for conditional operations, 
// including ternary operators, if...else, while, etc.

// NaN ("Not a Number") is a special kind of number value 
// that's typically encountered when the result of an
//  arithmetic operation cannot be expressed as a number. 
// It is also the only value in JavaScript that is not equal to itself


// JavaScript strings are immutable. 
// This means that once a string is created, it is not possible to modify it.
// String methods create new strings based on the content of the current string — for example:

// A substring of the original using substring().
// A concatenation of two strings using the concatenation operator (+) or concat().


// Objects
// In computer science, an object is a value in memory which is possibly 
// referenced by an identifier. In JavaScript, objects are the only 
// mutable values. Functions are, in fact, also objects with the
// additional capability of being callable.