import React from "react";
import Header from "../components/header";
import About from "../components/about";
import Abouttwo from "./abouttwo";
import Skills from "./Skills";
import Contact from "./contact";

const Home = () => {
  return (
    <div>
    

      <main>
        <About></About>
        <Abouttwo></Abouttwo>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </div> 
  );
};

export default Home;
