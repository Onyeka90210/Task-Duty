import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/AllTask.css'

const AllTask = () => {
  useEffect(() => {
    document.title = "All-Tasks || Page";
  });
  const scrollToTop =()=>{
    window.scroll({top:0,behavior:"smooth"})
  }
  return (
    <main className="container ">
      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <Link className="text-decoration-none text-dark">
            <h1>My Task</h1>
          </Link>
          <Link to="/NewTask" className="text-decoration-none text-dark">
            <h3 style={{ color: "#974FD0" }}> + Add to My Task </h3>
          </Link>
        </div>
      </div>
      {/* ================================= */}
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-danger ms-3">Urgent</h4>
          <div className="d-flex gap-3 my-3">
            <Link to="/EditTask" className="text-decoration-none">
              <button
                className="btn btn text-light btn-lg edit"
                style={{ backgroundColor: "#974FD0" }}
              >
                📝Edit
              </button>
            </Link>
            <div>
              <button
                className="btn btn-light btn-lg del"
                style={{ color: "#974FD0", borderColor: "#974FD0"}}
              >
              🗑️Delete
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-4 p-2">
          <h2 className="heading"> Fintech Website Update </h2>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>
      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </main>
  );
};

export default AllTask;