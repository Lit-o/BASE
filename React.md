# Keywords
SPA  <br>

#### Components 
Functions, that calls and recalls by React lib. OOP by Compo composition wellcome  <br>

#### Declarative 
Developer declarate how Compo looks like when app state changes, React recall and rerender compos by self  <br>

#### States  <br>
```js
...

setSomeState((state) => {
    const targetIndex = state.findIndex(elem => elem.id === targetId)

    const oldElem = state[targetIndex]
    const newElem = {...oldElem, isUpdate: !oldElem.isUpdate}

    const newImmutableState = [...state.slice(0, targetIndex), newElem, ...state.slice(targetIndex + 1)]
    return newImmutableState

    //map alternative

    return state.map(el=>{
        if (el.id === target.id) {
            return  {...el, isUpdate: !oldElem.isUpdate}
        }
        return el
    })
})

...

    return data.filter(el => {
        return data.desc.indexOf(matchWithSearchText) > -1
    })

...
```
<br>

#### Props (props read only)  <br> 
```jsx
    const User = ({id, name}) => {
        return <h1>User id - {id}, user name - {name}</h1>
    }
    const Surname = (props) => {
        return (
            <div>
                <h2>User surname - {props.surname}</h2>
                <button onClick={props.wake}>Wake up, Neo</button>
            </div>
        ) 
    }
    const App = () => {
        const neo = {surname: 'Anderson'}
        const wakeUp = () => {console.log('The Matrix has you...')}

        return (
            <div>
                <User id={5} name='Neo'/>
                <Surname surname={neo.surname} wake={wakeUp}/>
            </div>
        )
    }
```

#### React reconciliation algorithm 
The process by which React efficiently updates(re-renders) the UI in response to changes in a component's state or props. This process leverages a Virtual DOM or React VDOM (vs NATIVE DOM which is heavy and slow) to minimize direct manipulation of the actual DOM, which is a costly operation.<br>

#### JSX 
(JS into html)  <br>
one parent (at least fragment <> </>, or <React.Fragment key="1"> if keys needed)
```jsx
<h1>{some && operations ? 'one' : another + data || defaultValue}</h1>
```


#### React elem (JSX)
```jsx
const elemText = 'Elem'

const elemDoesntCustomChange = 'but re-rendered' + '(ref, not now, your time will come)'

const elem = (
    <div className='oneParentRuleOrFragment'>
        <h1>Elem</h1>
        <h2>Text: {elemText + ' second'}</h2>

        // Error because {}
        <h2>Text: {elemText + {} + 'objects-type-like doesn\'t allow, except array which transformed to concat of strings'}</h2> 

        <button tabIndex={1}>Tap</button>
        <button tabIndex="2" className='selfClose'/>
    </div>
)
```  
<br>

#### React Compo
a function that takes outer props or/and has its own state and returns JSX

```jsx
    const Footer = () => {
        const isThisTheEnd = true
        return <h4>{isThisTheEnd ? 'Footer text' : 'Not end yet'}</h4>
    }

    function CompoInput () {
        function doSomething(){
            return 'Something'
        }
        return (
            <>
                <p>{doSomething()}</p>
                <input 
                    placeholder='Type something' 
                    type='text'/>
            </>
            )
    }

    function App() {
        const Capital = 'First letter must be in CapitalCase'

        return (
            <>
                <h1>Compo!</h1>
                <CompoInput/>
                <Footer/>
            </>
        )
    }
```
<br>

#### .map()
```jsx
    ...
    const elems = data.map(item => {
        const {id, ...otherItemProps} = item
        return (
            <li>
                <SomeItemCompoAll key={id} {...otherItemProps}>
                <SomeItemCompoName key={id} name={item.name} {...item}>
            </li>
        )
    })

    return (
        <ul>
            {elems}
        </ul>
    )
    ...

    const someTemplateForMap = (el) => {
        return {
            name: el.n,
            id: el.id,
            color: el.c
        }
    }
    data.map(someTemplateForMap)
```
<br>

#### dyn className 
```js
    let classNames = 'start beautiful'
    if (active) {
        className += ' active'
    } 
```


#### Naming
```js
    const [data, setData] = useState('"set..." Something, get by just name')

    const onButtonPress = () => {console.log('"on..." Something that User manually activate')}

    const _markAsReadOnly = 'declare a pseudo Constant to other developers'
```

#### Styles
##### Inline Styles
```jsx
    <p style={{
        fontSize: 14,
        width: "100%",
    }}> Wake Up </p>

    const neoStyle = isAwake ? {color: 'red'} : null
    <p style={neoStyle}> Neo </p>
```

##### CSS SCSS 
```jsx
// terminal
// npm i sass

...
    import './sass-styled-item.scss'

    const App = () => {
        return (
            <h1 className='sass-styled-item_h1'>Wake Up</h1>
        )
    }
...
```

#### Imports
```jsx
    import customImage from "../../images/img1.png"
...
    <img src={customImage} alt="Description about image" className="smImg"/>
```

#### Condition render (one of the ways)
```jsx

const skeleton = contern || loading || error ? null : <Skeleton />
const errorMessage = error ? <ErrorComponent> : null
const spinner = loading ? <Spinner /> : null
const content = !(loading || error) ? <TargetComponentComponent data={data}> : null

return (
    <>
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
    </>
)
```


#### props.children
```jsx
    const CompoParent = (props) => {
        return (
            <div className={props.classN}>
                {props.children}
            </div>
        )
    }

    <CompoParent classN="beauty">
        <p>Some dynamic content</p>
    </CompoParent>

...
//alternative
        const CompoParentAlt = (props) => {
        return (
            <div className={props.classN}>
                React.Children.map(props.children, (item) => {
                    return React.cloneElement(item, {className: "addedCustomClass"})
                })
            </div>
        )
    }

...
//Compo as props
    <ParentCompo left={<p>Left Elem</p>} right={<RightCompo>}>
```

#### npm i react-error-boundary for ErrorBoundary in functional Compo



#### HOOKs
##### 2 main terms of use: <br>
1) HOOKs call only on top level of Component. Does't allow into other functions, loops, conditions
2) HOOKs call only into and from functional Component

##### useState
```jsx

    const [state, setState] = useState({a: 'initial data', b: 5})
    const [toggle, setToggle] = useState(true)

    function removeData = (a) {
        setState({})
    }

    function changeData = (arg) {
        setState(state => ({...state, a: arg}))
    }

    setToggle(toggle => !toggle)

    ...

    function calculated () {return 2 + 3}
    
    const App = (props) => {
        const [calcState, setCalcState] = useState(calculated)
        //or
        const [calcState, setCalcState] = useState(() => calculated())
        // calculated calls one time when Compo mount


        const [calcState, setCalcState] = useState(calculated())
        // calculated calls every time when Compo changes

    }

```

##### useEffect
can use several useEffect in one Compo if needed

```jsx
useEffect(() => {
    activateSomeAsyncOrEffect()
}, [])
// componentDidMount like - one call when Compo mount only

useEffect(() => {
    activateSomeAsyncOrEffectStateDepending()
}, [state])


useEffect(() => {
    activateSomeAsyncOrEffectStateDepending()

    return () => {
        unfollowFromListenersBeforeCompoWillUnmount()
        clearTimersOrIntervals()
    }
}, [state])
//componentWillUnmount
```

##### useCallback (memoized function link)
separate re-create/re-call function from re-render
make sense when memoized function send to child Compo with props, 
so child doesn't think this function is new every Parent Compo re-render, 
and don't unnecessary re-render self
```jsx
    const separateFlowFunction = useCallback(()=>{...some...}, [])

    const separateFlowFunction = useCallback(()=>{...some...}, [reasonOfChange])
```

##### useMemo (memoized result of function with heavy Expensive calculate)
it is generally not recommended to memoize primitive values.
Primitive values are inherently cheap to create and compare. 
The primary purpose of useMemo is to prevent expensive 
re-calculations of complex values or re-creation of reference types 
(like objects and arrays) that could trigger unnecessary re-renders of child components. 
```jsx
    const calculated = useMemo(()=>{
        return heavyCalculate() + 5
        // sideEffects are not allowed 
    },[])
```


##### useRef (React render flow limbo-data)
```jsx
    const someRef = useRef('custom initial data')

    const focusInput = () => {
        someRef.current.focus()
    }
    <input ref={someRef} />

...
    // when actions needed but re-render not
    const countRef = useRef(1)

    const inctRef = () => {
        countRef.current + 1
    }
...
    // callback ref case
    const itemsRef = useRef([])

    <li
        ref={liSelfElem => itemRefs.current[i] = liSelfElem}
    >
        element
    </li>

```

##### Custom Hooks (many resources on the internet with examples of useful ones)
```jsx
    function useIncDec (initialValue) => {
        const [count, setCount] = useState(initialValue)

        const inc = () => {
            setCount(prevCount => prevCount + 1)
        }

        const dec = () => {
            setCount(prevCount => prevCount - 1)
        }
        
        return {count, inc, dec}
    }

    const App = () => {
        const counter1 = useIncDec(0)
        const counter2 = useIncDec(5)

        useEffect(()=>{
            counter1.inc()
        },[])


        return <h2>{counter1.count} Wake up {counter2.count}</h2>
    }
```



#### batching
combining several state changes into one render by React

prevent batching React 18 for separate render for each operation if for some reason it's needed 
```jsx
import {flushSync} from 'react'
...
setTimeout(() => {
    flushSync(()=>{
        console.log('custom operation that wants its own render tik')
    })
}, 4)
```

#### R18 optimisation hooks
when huge(HUGE) list re-calculated and re-rendered
useTransition
useDeferredValue
in two(four) words - controlled custom render microdelay 


#### React.lazy
js chunk optimisation


#### React.memo (props changes optimisation)
Render optimisation for Compo-child changes by outer props
By default prevProps and currentProps match checked with shallow data

React.memo is a higher-order component (HOC) in React used for performance optimization. It memoizes a functional component, meaning React will skip re-rendering that component if its props have not changed since the last render.

##### Prop comparison:
By default, React.memo performs a shallow comparison of the component's props. If all the new props are strictly equal (using Object.is) to the old props, React will reuse the last rendered output instead of re-rendering the component.
##### Custom comparison:
You can provide a custom comparison function as a second argument to React.memo if the default shallow comparison is not sufficient (e.g., for deep comparison of complex objects or functions). This function receives prevProps and nextProps and should return true if the props are equal (meaning no re-render is needed) and false otherwise.
##### When to use React.memo:
Pure functional components: Components that always render the same output given the same props.
Performance bottlenecks: When a component re-renders frequently due to parent component updates, but its own props rarely change, leading to unnecessary re-renders and performance issues.
##### Important considerations:
React.memo only prevents re-renders based on prop changes. If a component wrapped in React.memo uses useState, useReducer, or useContext, it will still re-render if its internal state or context changes.
Overuse of React.memo can sometimes introduce more overhead than the performance benefits it provides, especially for simple components or components with frequently changing props. It's best used strategically after identifying performance bottlenecks.

##### How it works:
Wrapping a component: You wrap a functional component with React.memo like this:
```jsx
    const MyComponent = React.memo(function MyComponent(props) {
      // ... component logic
      return <div>{props.value}</div>;
    });
```

```jsx
    function areEqual = (prevProps, nextProps) => {
        // return true if the equal and re-render doesn't needed
        // or return false and re-render calls
        return prevProps.customData.deepName === nextProps.customData.deepName && prevProps.customData.id === nextProps.customData.id
    } 
    const MyComponent = React.memo(myChildåCompo, areEqual);
```

example: when every second the server is called and actual data is requested, and this data matches to current data, and re-render doesn't needed



#### useContext


#### useReducer (advanced useState)
```jsx
import React from 'react'

function reducer  (state, action) {
    switch (action.type) {
        case 'inc':
            return {
                    ...state,
                    count: state.count + 1 
                }
        case 'dec':
                return {
                    ...state,
                    count: state.count - 1 
                }
        default: 
            return state
    }
}

export default function Calculator ()  {
    const initData =  Number.parseFloat('1.12 initial Data')
    const [count, dispatch] = React.useReducer(reducer, {count: initData})


    return (
        <div>
            <button onClick={()=>{dispatch({type:'inc'})}}> +++ </button>
            <button onClick={()=>{dispatch({type:'dec'})}}> --- </button>
            <p>result = {count.count}</p>
        </div>
    )
}
```