import React, { useEffect }  from 'react';
import axios from 'axios';

export const AxiosUseEffectCatchError = () => {

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/commentsErrorTest").then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      // handle error

      console.log(error);
      console.log(`error.code  ${error.code}`);
      console.log(`${JSON.stringify(error.config)}`);
      console.log(`error.message ${error.message }`);
      console.log(`error.name ${error.name}`);
      console.log(`error.request.responseURL ${error.request.responseURL}`);
      console.log(`error.request.status ${error.request.status}`);
      console.log(`error.request.statusText ${error.request.statusText}`);
      console.log(`error.name ${error.name}`);
      console.log(`JSON.stringify(error.request) ${JSON.stringify(error.request)}`);
      console.log(`JSON.stringify(error.response) ${JSON.stringify(error.response)}`);
      console.log(`JSON.stringify(error.response.headers) ${JSON.stringify(error.response.headers)}`);
 
    })
    
  });

  return (
    <>
    <div>
      <p>AxiosUseEffectCatchError</p>
    </div>
    </>
  )
}