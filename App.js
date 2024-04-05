// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from "react";
import ReactDOM  from "react-dom/client";
// const heading = React.createElement(
//     "h1",
//     {
//       id: "heading",
//      },
//     "React is superpower"
//   );

  
   //JSX =>React.createElement =>ReactElement-JS Object =>HTMLElement(render)
   //react element  
     // babel help to conver jsx to react.createelement
  
  //React Functional Component
  const HeadingComponent1=()=>{
    return <h1 className="heading1">Namaste React Functional Component </h1>;
  };
  const jsxheading=
  (<h1 className="head">
    <HeadingComponent1/>
    React is superpower</h1>); 
  
  
  const HeadingComponent2=()=>(
      <div id="container">   
        {jsxheading}      
      <HeadingComponent1/>        
      <h1 className="heading2">Namaste React Functional Component 2 </h1>;
    </div>
  );
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeadingComponent2/>);