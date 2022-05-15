import React, { useState,useEffect }  from 'react';
import axios from 'axios';

export const AxiosUseEffectData = () => {

  const  [data,setData] = useState('');
  const  [count,setCount] = useState(0);
  const  [refetch,setRefetch] = useState(false);
  
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response);
      setData(response.data);
      setRefetch(false)
    })
  },[refetch])

  // useEffect(() => {
  //   ;
  //   setRefetch(false)
  // },[])

  const displayIdName = data && data.map((item) => {
    return <p key={item.id+item.name}>{item.id} {item.name}</p>
  })

  return (
    <>
    <div>
      <p>AxiosUseEffectData - count: { count }</p>
    </div>
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>
        Count
      </button>
      <button onClick={() => {
        setRefetch(true)
      }}>
        Refetch
      </button>
    </div>

    { data && displayIdName }

    </>
  )
}
