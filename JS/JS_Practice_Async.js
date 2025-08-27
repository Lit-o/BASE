// Callback practice
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



