import React, { useState, useEffect, cloneElement } from "react";
import Select from "react-select";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
function isNumber(str) {
  if (str.trim() === '') {
    return false;
  }

  return !isNaN(str);
}

export default function App() {
  const handleChangedms = event => {
    setDms(event.target.value);
    if (isNumber(event.target.value)) {
      console.log(' It is a valid number');
     
    } else {
      console.log(' It is NOT a valid number');
    }
  };
  const handleChangedmsloss = event => {
    setDmsloss(event.target.value);
     if (isNumber(event.target.value)) {
      console.log(' It is a valid number');
    } else {
      console.log(' It is NOT a valid number');
    }
  };
  const handleChangerevenue = event => {
    setRevnue(event.target.value);
     if (isNumber(event.target.value)) {
      console.log(' It is a valid number');
    } else {
      console.log(' It is NOT a valid number');
    }
  };
  // const [date, setDate] = useState("");

  const [dms, setDms] = useState("");
  const [dmsloss, setDmsloss] = useState("");
  const [revenue, setRevnue] = useState("");
  const [error, setError] = useState(false);
  const [numbererror, setnumbererror] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState([{ state: "", sitename: "" }]);
  const [data, setData] = useState([{ state: "", sitename: "" }]);

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
  function savedata(e) {
   if (
      input.length == 0 ||
       dms.length == 0 ||
      dmsloss.length == 0 ||
      revenue.length == 0 ||
      startDate.length == 0
    ) {
     // alert("require");
      setError(true);
    }

  
    e.preventDefault();
    console.log(input, startDate, dms, dmsloss, revenue);
  }
  function addinputField() {
    setInput([...input, { startDate: "",state: "", sitename: "" ,dms: "",dmsloss: "",revenue: ""}]);
  }
  function removeinputField(e, index) {
    const list = [...input];
    list.splice(index, 1);
    setInput(list);
  }
  return (
    <>
      <div className="header">
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
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="datepicker"
                />

                <div className="errormsg">
                  {error && startDate.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="state">
                <label>State</label>
                <Select
                  options={options1}
                  name="state"
                  className="select"
                  //  onChange={(e) => handleinputchange2(e, i)}
                  // onChange={handleinputchange2}
                  onChange={(e) => handleinputchange2(e, i)}
                />
                <div className="errormsg">
                  {error && input.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="sitename">
                <label>Sitename</label>
                <Select
                  options={options}
                  name="sitename"
                  className="select"
                  onChange={(e) => handleinputchange2(e, i)}
                />
                <div className="errormsg">
                  {error && input.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="dms">
                <label>DMS</label>
                <input
                  type="text"
                  name="dms"
                  className="inputbox"
                  placeholder="enter the dms"
                  onChange={handleChangedms}
                  value={dms}
                ></input>
                <div className="errormsg">
                  {error && dms.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div>
                {/* <div className="errormsg">
                  {numbererror && (
                    <label className="vaildation">not a number</label>
                  )}
                </div> */}
              </div>

              <div className="dmsloss">
                <label>DMS Loss %</label>
                <input
                  type="text"
                  name={dmsloss}
                  className="inputbox"
                  placeholder="enter the dms loss"
                  onChange={handleChangedmsloss}
                  value={dmsloss}
                ></input>
                <div className="errormsg">
                  {error && dmsloss.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="revenue">
                <label>Revenue</label>
                <input
                  type="text"
                  name={revenue}
                  className="inputbox"
                  placeholder="enter the revenue"
                  onChange={handleChangerevenue}
                  value={revenue}
                ></input>
                <div className="errormsg">
                  {error && revenue.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
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
