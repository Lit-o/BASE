const menu = [
    {name: 'Margherita', price: 5},
    {name: 'Pepperoni', price: 6},
    {name: 'Hawaiian', price: 7},
    {name: 'Cheese', price: 8}
]

let cashInRegister = 0

const orderQueue:any[] = []
let nextOrderId = 1


function addNewPizza(pizzaObj:any) {
    menu.push(pizzaObj)
}


function placeOrder(pizzaName:string) {
    const currentPizza = menu.find(el => el.name === pizzaName)
    if (!currentPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += currentPizza?.price

    const newOrder = {pizza: currentPizza, status: 'ordered', id: nextOrderId++}
    orderQueue.push(newOrder)
    return newOrder

}


function completeOrder (orderId:number) {
    const targetOrder = orderQueue.find(el => el.id === orderId)
    targetOrder.status = 'completed'
    return targetOrder
}


addNewPizza({name: 'BBQ', cost: 8})
addNewPizza({name: 'BBQ + Bacon', cost: 12})
addNewPizza({name: 'Spicy Sausage', cost: 10})

placeOrder('BBQ')
placeOrder('BBQ + Bacon')

completeOrder(2)

console.log('Menu: ', menu)
console.log('cashInRegister: ', cashInRegister)
console.log('orderQueue: ', orderQueue)
