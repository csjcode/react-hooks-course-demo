
import React, { useEffect }  from 'react';
import axios from 'axios';

export const AxiosUseEffect = () => {

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response);
    })
  })

  return (
    <>
    <div>
      <p>AxiosUseEffectCatch</p>
    </div>
    </>
  )
}
