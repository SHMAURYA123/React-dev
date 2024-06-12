import UserContext from "../utility/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

 class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("Parent constructor Did Mount");
    }
   render(){
    // console.log("parent render");
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React</h2>
           <div>
            loggedInUser
            <UserContext.Consumer>
                {({loggedInUser})=>(
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>
           </div>
           <UserClass name={"Second"} location={"Badarpur"}/>
        </div>
    );
   }
 }

//  -parent constructor
//  -parent render
//  -first Child constructor called
//  -first child render
//  -Second constructor called
//  -Second render
// -FirstChild constructor Did Mount
// -SecondChild constructor Did Mount
// -Parent constructor Did Mount
 
 export default About;