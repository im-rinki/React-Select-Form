import React, { useState, useEffect, cloneElement } from "react";
import Select from "react-select";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  // const [date, setDate] = useState("");
  const [dms, setDms] = useState("");
  const [dmsloss, setDmsloss] = useState("");
  const [revenue, setRevnue] = useState("");
  const [date, setDate] = useState("");
  const [input, setInput] = useState([{ state: "", sitename: "" }]);
  const handleinputchange2 = (e, index) => {
    const list = [...input];
    console.log("index", index);
    console.log("selectedoption", e);
    console.log(list);
    console.log(list[index]);
    list[index]["state"] = e.value;
    setInput(list);
    console.log("input", input);
  };
 
  
  function addinputField() {
    setInput([...input, { date:"",state: "", sitename: "",dms: "",dmsloss: "",revenue: "" }]);
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
            <div className="form-inline" key={i}>
              <div className="date">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  className="inputdate"
                  onChange={(e) => setDate(e.target.value)}
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
                  onChange={(e) => handleinputchange2(e, i)}
                />
                <div className="errormsg">
                  {error && input.length <= 0 ? (
                    <label className="vaildation">this field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              
              <div className="div3">
                <label>Sitename</label>
                <Select
                  options={options1}
                  name="sitename"
                  className="select"
                  onChange={(e) => handleinputchange2(e, i)}
                />
                <div className="errormsg">
                  {error && input.length <= 0 ? (
                    <label className="vaildation">this field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="div4">
                <label>DMS</label>
                <input
                  type="text"
                  className="dms"
                  placeholder="enter the dms"
                  onChange={(e) => setDms(e.target.value)}
                ></input>
                
              </div>
              <div className="errormsg">
                  {error && dms.length <= 0 ? (
                    
                    <label className="vaildation">this field is require</label>
                    
                     ) : (
                    ""
                  )}
                </div>
              <div className="div5">
                <label>DMS Loss %</label>
                <input
                  type="text"
                  className="dms"
                  placeholder="enter the dms loss"
                  onChange={(e) => setDmsloss(e.target.value)}
                ></input>
                <div className="errormsg">
                  {error && dmsloss.length <= 0 ? (
                    <label className="vaildation">this field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="div6">
                <label>Revenue</label>
                <input
                  type="text"
                  className="dms"
                  placeholder="enter the revenue"
                  onChange={(e) => setRevnue(e.target.value)}
                ></input>
                <div className="errormsg">
                  {error && revenue.length <= 0 ? (
                    <label className="vaildation">this field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="div7">
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
              <div className="div8">
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
