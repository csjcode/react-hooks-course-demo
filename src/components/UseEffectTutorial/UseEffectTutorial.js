import React, { useEffect }  from 'react';
import axios from 'axios';

export const UseEffectTutorial = () => {

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response);
    })
    
  },[])

  return (
    <>
    <div>
      <p>Hello World</p>
    </div>
    </>
  )
}
