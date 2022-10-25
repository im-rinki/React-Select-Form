import React, { useState, useEffect, cloneElement } from "react";
import Select from "react-select";
import "./App.css";
import { useForm } from "react-hook-form";
import csc from "country-state-city";
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
  
 const [input, setInput] = useState([{ date: "", state: "", sitename: "" }]);
    function handleinputchange(index) {
    // const {name,value}=e.target;
    // console.log(input)
    const list = [...input];
    // list[index][name]=value;
    // setInput(list);
    console.log(list[index]);
    
  }

  function handleinputchange2(i) {
    // const {name,value}=e.target;
    // console.log(input)

    const list = [...input];
    console.log(i);
    console.log(list);
    console.log(list[i]);
    // list[index]["name"]=username1;
    // setInput(list);
  }
  function savedata() {
    console.log(input);
  }
  function addinputField() {
    setInput([...input, { date: "", state: "", sitename: "" }]);
  }
  function removeinputField(e, index) {
    const list = [...input];
    list.splice(index, 1);
    setInput(list);
  }
  return (
    <>
      <div className="headingbg">
        <div className="heading">
          <h2>Form</h2>
        </div>
      </div>
      <form>
        {input.map((x, i) => {
          return (
            <div className="form-inline">
              <div className="div1">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  className="date"
                  onChange={(e) => handleinputchange(e, i)}
                />
              </div>

              <div className="div2">
                <label>State</label>
                <Select
                  options={options}
                  name="state"
                  className="select"
                  //  onChange={(e) => handleinputchange2(e, i)}
                  // onChange={handleinputchange2}
                  onChange={()=>handleinputchange2()}
                />
              </div>

              <div className="div3">
                <label>Sitename</label>
                <Select
                  options={options1}
                  name="sitename"
                  className="select"
                  onChange={handleinputchange}
                />
              </div>
              <div className="div4">
                <label>DMS</label>
                <input type="number" className="dms" placeholder="enter the dms"></input>
              </div>
              <div className="div5">
                <label>DMS Loss %</label>
                <input type="text" className="dms" placeholder="enter the dms loss"></input>
              </div>
              <div className="div6">
                <label>Revenue</label>
                <input type="text" className="dms" placeholder="enter the revenue"></input>
              </div>
              <div className="div6">
                {input.length !== 1 && (
                  <button
                    className="buttonremove"
                    type="button"
                    onClick={() => removeinputField(i)}
                  >
                    -
                  </button>
                 
                )}
                 </div>
                <div className="div7">
                {input.length - 1 === i && (
                  <button
                    className="buttonadd"
                    type="button"
                    onClick={() => addinputField()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="button">
          <button className="button submit" type="submit" onClick={savedata}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
