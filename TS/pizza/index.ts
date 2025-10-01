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


function placeOrder(pizzaName:string):OrderPizza {
    const currentPizza = menu.find(el => el.name === pizzaName)
    if (!currentPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        throw new Error(`${pizzaName} does not exist in the menu`)
    }

    cashInRegister += currentPizza.price

    // If remove OrderPizza explicit defining type then error appear
    const newOrder:OrderPizza = {pizza: currentPizza, status: "ordered", id: nextOrderId++}
    orderQueue.push(newOrder)

    return newOrder
}

// if i return empty then undefined need to be defining in output type,
// or instead of return i can use throw new Error(`some discription`) 
function completeOrder (orderId:number): OrderPizza | undefined {
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


// type Narrowing
function narrowingExampler (inputData: number | string): void {
    if (typeof inputData === 'number') {
        console.log(inputData + 1) 
    } else {
        console.log(inputData.toLowerCase())
    }
}





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


// UTILITY TYPES
interface UserDefault {
    id: number
    name: string
    age: number,
    secondName: string 
}

// PARTIAL Make all params from type is optional a?: b?: c?: ...
type UserAnonymous = Partial<UserDefault>

const FirstAnonUser: UserAnonymous = {
    age: 25,
}

// OMIT make new type and Omit parameters that specified
type NumberlessUser = Omit<UserDefault, 'id' | 'age'>

const secondAnonNumberlessUser: NumberlessUser = {
    name: 'John',
    secondName: 'Doe'
}



// Super Type 
// & or extends - can make super type
type BaseType = {
    name: string
}
type SuperBaseType = BaseType & {age: number}
interface ISuperBaseType extends BaseType {
    id: number
}
const baseText: SuperBaseType = {
    age: 32,
    name: 'John'
}



// // React and React Native typing
// interface LoginProps {
//     setIsSignedIn: React.Dispatch<SetStateAction<boolean>>
//     // Practice with property typing 
//     // ReactNode include string, number, boolean, JSX.Element etc.
//     children?: React.ReactNode
//     childrens?: React.JSX.Element[]
//     someOptionalProp?: any 
//     imageProps?: React.ComponentPropsWithoutRef<"img"> & string & {name: string}
//     padding?: [number, number, number, number]
//     style?: React.CSSProperties
//     onClick?: () => void
//     onDblClick?: (data: string) => string
// }