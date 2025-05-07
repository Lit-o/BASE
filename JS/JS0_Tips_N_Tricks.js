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