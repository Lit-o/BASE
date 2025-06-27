# Keywords
SPA  </br>

#### Components 
Functions, that calls and recalls by React lib. OOP by Compo composition wellcome  </br>

#### Declarative 
Developer declarate how Compo looks like when app state changes, React recall and rerender compos by self  </br>

#### States  </br>

#### Props  </br>

#### React reconciliation algorithm 
The process by which React efficiently updates(re-renders) the UI in response to changes in a component's state or props. This process leverages a Virtual DOM or React VDOM (vs NATIVE DOM which is heavy and slow) to minimize direct manipulation of the actual DOM, which is a costly operation.</br>

#### JSX 
(JS into html)  </br>

#### React elem
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
</br>

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