import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main>
      <div></div>
      <div className=" mt-5 mainbox">
        <div className="manage">
          <h2>
            Manage your Tasks on <span style={{ color: "#974FD0" }}>Task duty</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui labore repellat laudantium consequuntur animi? Delectus maxime, saepe optio molestias laudantium magni, harum cum veritatis laboriosam ad aperiam voluptas quis veniam? Doloremque dicta reiciendis tenetur in illum.
          </p>
          <Link to='/Alltask'><button className=" w-25 mt-2 text-white GTMT" style={{backgroundColor: "#974FD0"}}>Go to My task</button></Link>
        </div>
        <div className="picdiv">
          <img src="/src/assets/Component 1.svg" alt="" className="pic"/>
        </div>
      </div>
    </main>
  );
};

export default Hero;
