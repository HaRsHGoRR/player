import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState('');
    const initialState={
        FirstName:"",
        Sem:0,
        Div:""
    }

    const handlechange=(e)=>{
        setName(e.target.value);
    }
    const checkconsole=(e)=>{
        e.preventDefault();
        console.log(name);
    }
  return (
    <>
    <form onSubmit={checkconsole}>
    <h1>Student FORM</h1>

    <input type='text'onChange={handlechange}></input>
    
    <h2>Your Name:{name}</h2>
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Form