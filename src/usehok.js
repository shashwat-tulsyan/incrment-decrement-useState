import React, { useState } from 'react'

const Usehok = () => {
    const [count,setCount]=useState(0);

    const inc=()=>
    {
        setCount(count+1);
    }
    const dec=()=>
    {
        if(count>0)
        {
            setCount(count-1);
        }
    }

    return (

        <>
        <div className='main'>
          <button onClick={inc}>+</button>
          <h1>{count}</h1>
        <button onClick={dec}>-</button>
        </div>
        </>

  



  )
}

export default Usehok