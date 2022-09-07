import React, { useState } from "react";
import "./index.scss";

const About = () => {
  const [name, setName] = useState(() => {
    return " <javayscript />";
  }); // useState accepts the current state as a parameter. this could be written as useState(4). it's best practice to pass an arrow function in as a paramenter to prevent function from being run multiple times and slowing down app.

  const aliasName = () => setName(() => " Javay Porter");
  const codeName = () => setName(() => " <javayscript />");
  //const incrementCount = () => setCount((prevCount) => prevCount + 2);
  return (
    <div>
      Hi! I'm
      <span>{name}</span>
      <button onClick={codeName}>Code Name</button>
      <button onClick={aliasName}>Human Alias</button>
      <div>
        <h1 className="animae">JAV</h1>
      </div>
    </div>
  );
};

export default About;
