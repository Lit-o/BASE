// Callback practice ----------------------------------------
let hisName = 'Mr. Anderson'


function wakeUp(callback) {
    console.log('[async wakeUp call]')

    setTimeout(()=> {
        hisName = 'Neo...'
        console.log(`Wake up, ${hisName}`)
        callback()
    }, 4000);
}


function theMatrix(callback) {
    console.log('[async theMatrix call]')

    setTimeout(()=> {
        callback()
    }, 4000)
}


function hasYou(){
    console.log('The Matrix has you...')
}


console.log(`Why, ${hisName}?`)


wakeUp(()=>{
    theMatrix(()=>{
        hasYou()
    })
})



// Promises ----------------------------------------

let outerValue = 12

function makeProm (outerValue, delay = 1000) {
    return new Promise((resolve, reject) => {
        console.log('makeProm run and outerValue is -> ', outerValue)
        setTimeout(()=>{
            const num = outerValue + 4
            switch(true) {
                case num > 10:
                    resolve(`Prom1 data > 10 -> ${num}`)
                break
                case num < 10: 
                    reject(`Prom1 data < 10 -> ${num}`)
                break
                default: 
                    resolve('10')
                break
            }
        }, delay)
    })
} 

function makeSecProm (data) {
    return new Promise((resolve, reject) => {
        console.log('makeSecProm run and payload is -> ', data)

        setTimeout(()=>{
            if (data === 'Matrix') {
                reject('The Matrix has you...')
            }
            resolve(`makeSecProm ${data}`)
        }, 6000)
    })
}

// const promReceiver = makeProm(outerValue, 6000)

// run immediately when assignment to promiseExmpl variable
let promiseExmpl = new Promise(function(resolve, reject) {
    console.log('promise just instance')
    setTimeout(() => {console.log('promise just instance resolve'); resolve("done!")}, 1000);
});

const logger = (data) => {
    console.log('logger run')
    console.log(data)
}

const rejLogger = (data) => {
    console.log('rejLogger run')
    console.log(`rejLogger data -> ${data}`)
}

// promReceiver
//     .then(logger, rejLogger)
//     .catch(()=>{console.log('CATCH1!')})

// makeProm(4, 4000)
//     .then((d) => {console.log(d)})
//     .catch(()=>{console.log('CATCH2!')})

// makeProm(12, 2000)
//     .then((d) => {console.log(d); return makeSecProm('Matrix')})
//     .then(logger, rejLogger)
//     .catch(()=>{console.log('CATCH ALL')})

// makeProm(2, 2000)
//     .then((d) => {console.log(d); return makeSecProm('Neo')})
//     .then(logger, rejLogger)
//     .catch(()=>{console.log('CATCH ALL')})

// prom1 async
// prom1 async
// rejLogger data -> Prom1 data < 10 -> 6


// makeProm(2, 2000)
//     .then((d) => {console.log(d); return makeSecProm('Neo')})
//     .then(logger)
//     .catch(()=>{console.log('CATCH ALL')})

// prom1 async
// prom1 async
// CATCH ALL


// makeProm(12, 2000)
//     .then((d) => {console.log('! this !', d)})
//     .then(() => {makeSecProm('Neo')})
//     .then(logger)
//     .catch(()=>{console.log('CATCH ALL')})


// makeProm(12, 2000)
//     .then((d) => {console.log('! this !', d); return 'Neo'})
//     .then(makeSecProm)
//     .then(logger)
//     .catch(()=>{console.log('CATCH ALL')})


// Mix sync and async

makeProm(12, 2000)
    .then((d) => {console.log('! this !', d)})
    .then(() => { return makeSecProm('Neo')})
    .then(logger)
    .catch(()=>{console.log('CATCH ALL')})

// the SAME

makeProm(12, 2000)
    .then((d) => {console.log('! this !', d); return 'Neo'})
    .then(makeSecProm)
    .then(logger)
    .catch(()=>{console.log('CATCH ALL')})

// !! CHAIN BREAK
// makeProm(12, 2000)
//     .then((d) => {console.log('! this !', d); return 'Neo'})
//     .then(makeSecProm('Neo'))
//     //CAUTION  
//     //.then(makeSecProm('Neo')) - chain wrong behavior 
//     // wright behavior is 
//     // .then(() => { return makeSecProm('Neo')})
//     .then(logger)
//     .catch(()=>{console.log('CATCH ALL')})