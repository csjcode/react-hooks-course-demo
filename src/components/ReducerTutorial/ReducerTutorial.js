import React, { useReducer }  from 'react'
import { reducer } from './reducer'

export const ReducerTutorial = () => {

  const [state, dispatch]  = useReducer(reducer,{
    count:0, showText:true
  });

  return (
    <>
    <div>ReducerTutorial</div>
      <div>
        <h1>{ state.count }</h1>
        <button onClick={() => {
          dispatch({ type: "INCREMENT"})
        }}>INCREMENT</button> 

        <button onClick={() => {
          dispatch({ type: "RESET"})
        }}>Reset</button> 

        <button onClick={() => {
          dispatch({ type: "TOGGLETEXT"})
        }}>Toggle Text</button> 

      </div>
      <div>
        { state.showText && <p>Thanks for playing...</p> } 
      </div>
      <div>
        
      </div>

    </>
  )
}
