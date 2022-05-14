import React, {useState}  from 'react'

export const StateTutorial = () => {

  const [counter,setCounter] = useState(0);
  const [inputValue,setInputValue] = useState('');
  const [showText,setShowText] = useState(true);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const increment = () => {
    setCounter(counter+1);
    setShowText(!showText)
  }

  const decrement = () => {
    setCounter(counter-1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
    <div>StateTutorial</div>
      <div>
        <button onClick={increment}>Increment</button> 
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>    
      </div>
      <div>  
        <label>Input: </label>
        <input type="text" placeholder="Input something..." onChange={onInputChange}/>
      </div>  
      <div>
        { showText && <p>Thanks for playing...</p> } 
        <p>{ counter }</p>
        <p>{ inputValue }</p>
           
      </div>

    </>
  )
}
