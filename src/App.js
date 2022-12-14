import React, { useState } from "react";
import Select from "react-select";
import "./App.css";
import { useFormik } from "formik";
import { Vaildation } from "./Vaildation";
import Multiselect from "multiselect-react-dropdown";
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
const initialValues = {
  date: "",
  // state: "",
  // sitename: "",
  dms: "",
  dmsloss: "",
  revenue: "",
};
export default function App() {
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
  const [input, setInput] = useState([{ state: "", sitename: "" }]);
  const [error, setError] = useState(false);

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: Vaildation,

    onSubmit: (values) => {
      // handle form submission
      console.log(values);
      console.log(errors);
    },
  });

  function addinputField() {
    setInput([
      ...input,
      { date: "", state: "", sitename: "", dms: "", dmsloss: "", revenue: "" },
    ]);
  }
  function removeinputField(e, index) {
    const list = [...input];
    list.splice(index, 1);
    setInput(list);
  }
  // function handleChange(val){
  //   console.log(val.target.value);
  // }
  function savedata(e) {
    if (input.value == "") {
      // alert("require");
      setError(true);
    }
  }
  return (
    <>
      <div className="headingbg">
        <div className="heading">
          <h2>Form</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {input.map((x, i) => {
          return (
            <div className="form-inline" key={i}>
              <div className="date">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  className="inputdate"
                  value={values.date}
                  onChange={handleChange}
                />
                {errors.date && touched.date ? (
                  <p className="errormsg">{errors.date}</p>
                ) : null}
              </div>

              <div className="div2">
                
                <label>State</label>
                <Select
                  isMulti
                  options={options}
                  name="state"
                  className="select"
                  value={values.state}
                  multiple={true}
                  onChange={(e) => handleinputchange2(e, i)}
                  //  onChange={handleChange}
                />
              </div>
              {/* {errors.state && touched.state ? (<p className="errormsg">{errors.state}</p>) : null} */}

              <div className="errormsg">
                {error && input.length <= 0 ? (
                  <label className="vaildation">This field is require</label>
                ) : (
                  ""
                )}
              </div>
              <div className="div3">
                <label>Sitename</label>
                <Select
                  isMulti
                  options={options1}
                  name="sitename"
                  className="select"
                  value={values.sitename}
                  multiple={true}
                  onChange={(e) => handleinputchange2(e, i)}
                  //  onChange={handleChange}
                ></Select>
                {errors.sitename && touched.sitename ? (
                  <p className="errormsg">{errors.sitename}</p>
                ) : null}
              </div>
              <div className="div4">
                <label>DMS</label>
                <input
                  type="text"
                  className="dms"
                  name="dms"
                  placeholder="enter the dms"
                  value={values.dms}
                  onChange={handleChange}
                ></input>
                {errors.dms && touched.dms ? (
                  <p className="errormsg">{errors.dms}</p>
                ) : null}
              </div>

              <div className="div5">
                <label>DMS Loss %</label>
                <input
                  type="text"
                  name="dmsloss"
                  className="dms"
                  placeholder="enter the dms loss"
                  value={values.dmsloss}
                  onChange={handleChange}
                ></input>
                {errors.dmsloss && touched.dmsloss ? (
                  <p className="errormsg">{errors.dmsloss}</p>
                ) : null}
              </div>
              <div className="div6">
                <label>Revenue</label>
                <input
                  type="text"
                  className="dms"
                  name="revenue"
                  placeholder="enter the revenue"
                  value={values.revenue}
                  onChange={handleChange}
                ></input>
                {errors.revenue && touched.revenue ? (
                  <p className="errormsg">{errors.revenue}</p>
                ) : null}
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
          <button
            className="button submit"
            type="submit"
            value="submit"
            onClick={savedata}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
