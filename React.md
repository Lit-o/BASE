# Keywords
SPA  <br>

#### Components 
Functions, that calls and recalls by React lib. OOP by Compo composition wellcome  <br>

#### Declarative 
Developer declarate how Compo looks like when app state changes, React recall and rerender compos by self  <br>

#### States  <br>
```
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
```
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
```
<h1>{some && operations ? 'one' : another + data || defaultValue}</h1>
```


#### React elem (JSX)
```
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

```
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
```
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

    retutn (
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
```
    let classNames = 'start beautiful'
    if (active) {
        className += ' active'
    } 
```


#### Naming
```
    const [data, setData] = useState('"set..." Something, get by just name')

    const onButtonPress = () => {console.log('"on..." Something that User manually activate')}

    const _markAsReadOnly = 'declare a pseudo Constant to other developers'
```

#### Styles
##### Inline Styles
```
    <p style={{
        fontSize: 14,
        width: "100%",
    }}> Wake Up </p>

    const neoStyle = isAwake ? {color: 'red'} : null
    <p style={neoStyle}> Neo </p>
```

##### CSS SCSS 
```
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
```
    import customImage from "../../images/img1.png"
...
    <img src={customImage} alt="Description about image" className="smImg"/>
```

#### Condition render (one of the ways)
```

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
```
    const CompoParent = (props) => {
        return (
            <div className={props.classN}>
                {props.children}
            </div>
        )
    }

    <CompoParent2 classN="beauty">
        <p>Some dynamic content</p>
    </CompoParent2>

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



#### HOOKs
##### 2 main terms of use: <br>
1) HOOKs call only on top level of Component. Does't allow into other functions, loops, conditions
2) HOOKs call only into and from functional Component

##### useState
```

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

```
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
```
    const separateFlowFunction = useCallback(()=>{...some...}, [])

    const separateFlowFunction = useCallback(()=>{...some...}, [reasonOfChange])
```

##### useMemo (memoized result of function with heavy Expensive calculate)
it is generally not recommended to memoize primitive values.
Primitive values are inherently cheap to create and compare. 
The primary purpose of useMemo is to prevent expensive 
re-calculations of complex values or re-creation of reference types 
(like objects and arrays) that could trigger unnecessary re-renders of child components. 
```
    const calculated = useMemo(()=>{
        return heavyCalculate() + 5
        // sideEffects are not allowed 
    },[])
```


##### useRef (React render flow limbo-data)
```
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
