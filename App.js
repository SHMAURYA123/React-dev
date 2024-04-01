// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from "react";
import ReactDOM  from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
      id: "heading",
     },
    "React is superpower"
  );

  console.log(heading);

  const jsxheading=<h1>React is superpower</h1>;
  console.log(jsxheading);
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(heading);