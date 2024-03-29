import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/NewTask.css'
import Form from 'react-bootstrap/Form'

const NewTask = () => {
  useEffect(() => {
    document.title = "New-Task || Page";
  });
  const scrollToTop =()=>{
    window.scroll({top:0,behavior:"smooth"})
  }
  return (
    <main className="container">
      <div className="mt-4">
        <Link to="/" className="text-decoration-none text-dark fs-1 fw-bold">
          New Task
        </Link>
      </div>
      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4">Task Title</h5>
        <input
          type="text"
          className="w-100"
          placeholder="E.g Project Defense, Assignment ..."
        />
      </div>
      <div className="fieldset-containers m-5 h-25">
        <h5 className="fieldset-title fs-4">Description</h5>
        <input
          type="text"
          className="w-100"
          placeholder="Briefly describe your task ..."
        />
      </div>
      {/* options */}
      <div className="fieldset-container m-5">
        <h5 className="fieldset-title fs-4">Tags</h5>
        <Form.Select aria-label="Default select example" className="form-select">
          <option value="">
            <span>URGENT</span> <span>IMPORTANT</span>
          </option>
          <option value="1">Urgent</option>
          <option value="2">Important</option>


        </Form.Select>
      </div>
      <div className="buttondiv container">
        <button className="btn btn-lg text-light fs-4 done" style={{backgroundColor:"#974FD0"}}>
          Done
        </button>
      </div>
      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </main>
  );
};

export default NewTask;