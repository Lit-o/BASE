const menu:MenuItem[] = [
    {name: 'Margherita', price: 5},
    {name: 'Pepperoni', price: 6},
    {name: 'Hawaiian', price: 7},
    {name: 'Cheese', price: 8}
]

// Defining custom type
type MenuItem = {
    name: string
    price: number
}

// Defining basic type
let cashInRegister: number = 0

// Defining array type

interface OrderPizza {
    id: number
    pizza: MenuItem
    // | - is union
    status: 'ordered' | 'completed'
    // status: string

    // ? - is optional
    rating?: number
}

const orderQueue:OrderPizza[] = []
let nextOrderId = 1


function addNewPizzaToMenu(pizzaObj:MenuItem) {
    menu.push(pizzaObj)
}


function placeOrder(pizzaName:string) {
    const currentPizza = menu.find(el => el.name === pizzaName)
    if (!currentPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += currentPizza.price

    // If remove OrderPizza explicit defining type then error appear
    const newOrder:OrderPizza = {pizza: currentPizza, status: "ordered", id: nextOrderId++}
    orderQueue.push(newOrder)

    return newOrder
}


function completeOrder (orderId:number) {
    const targetOrder = orderQueue.find(el => el.id === orderId)
    if (!targetOrder) {
        console.log('This ID doesn\'t exist! Check out and try another ID')
        return
    }
    targetOrder.status = 'completed'
    return targetOrder
}


addNewPizzaToMenu({name: 'BBQ', price: 8})
addNewPizzaToMenu({name: 'BBQ + Bacon', price: 12})
addNewPizzaToMenu({name: 'Spicy Sausage', price: 10})

placeOrder('BBQ')
placeOrder('BBQ + Bacon')

completeOrder(2)

// console.log('Menu: ', menu)
// console.log('cashInRegister: ', cashInRegister)
// console.log('orderQueue: ', orderQueue)





// LIST OF TOPICS
// Basic, literal and custom types
// Optional properties
// Unions
// Type Narrowing
// Utility Types
// Generics




// My own practice
function genericFunctionPractice<T>(inputData: T): Array<T> {
    console.log(inputData)
    console.log(typeof inputData)
    return [inputData]
}

genericFunctionPractice(5)
genericFunctionPractice(false)
genericFunctionPractice<string>('string data')

// Error when explicit-<Generic>-type-parameter conflicted 
// with missmatch current (argument) type when try run and execute - <number>('string er')
// genericFunctionPractice<number>('string er')

console.log(genericFunctionPractice(5))

