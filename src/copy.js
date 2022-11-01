import React, { useState } from "react";
import Select from "react-select";
import "./App.css";
import { useForm } from "react-hook-form";
const options = [
  { value: "rinki", label: "rinki" },
  { value: "abc", label: "abc" },
  { value: "xyz", label: "xyz" },
];

const options1 = [
  { value: "hodal", label: "hodal" },
  { value: "palwal", label: "palwal" },
  { value: "fbd", label: "fbd" },
  { value: "gurgaon", label: "gurgaon" },
  { value: "delhi", label: "delhi" },
];
export default function App() {
//  const{register,handleSubmit,errors}=useForm();
  const onSubmit = data => console.log(data);
  const [input,setInput]=useState([{date:"",username:"",state1:""}]);
  function handleinputchange(e,index){
  const {name,value}=e.target;
  const list=[...input];
  list[index][name]=value;
  setInput(list);
  console.log(list);
  }
  function addinputField(){
  
    setInput([...input,{date:"",username:"",state1:""}]);

  }
  function removeinputField(e,index){
    const list = [...input];
        list.splice(index, 1);
        setInput(list)
  }
 return (
    <form onSubmit={handleSubmit(onSubmit)}>
{input.map((x,i) => {
  return(
  <div className="form-inline">
    <div className="div1">
    <label>Date</label>
    <input type="date" name="date" className="date" {...register("date", { required: true })} onChange={e => handleinputchange(e,i)} />
    
    </div>
    {errors.date && "require"}
    <div2 className="div2">
    <label>Username</label>
    <Select options={options} name="username" {...register("date", { required: true })} className="select" onChange={e => handleinputchange(e,i)} />
    </div2>
    <div3 className="div3">
    <label>State</label>
    <Select options={options1} name="state1"  className="select" onChange={e => handleinputchange(e,i)} />
    </div3>
    <div className="div4">
    {
     input.length!==1&& 
    <button className="button add" type="button" onClick={() => removeinputField(i)}>-</button>
   }
    {
      input.length-1===i&& 

    <button className="button add" type="button" onClick={() => addinputField()}>+</button>
   
}
</div>
  </div>
  
  );
  })}
<div className="button">
   <button className="button submit" type="submit">Submit</button>
</div>
</form>
)
}