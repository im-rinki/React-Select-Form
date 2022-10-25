import React from 'react'
import { useState } from 'react';

 function Child(props) {
    const [name,setName]=useState();
    function handleSubmit(e){
        e.preventdefault();
        props.a(name)
    }
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button>submit</button>
    </div>
  )
}
export default Child;