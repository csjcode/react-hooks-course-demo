import React, { useState,useEffect }  from 'react';
import axios from 'axios';

export const UseEffectTutorial = () => {

  const  [data,setData] = useState('');
  
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response);
      setData(response.data);
    })
    
  },[])

  return (
    <>
    <div>
      <p>Hello World</p>
    </div>

    { data && data.map((item) => {
        return <p>{item.id} {item.name}</p>
     }) }

    </>
  )
}
