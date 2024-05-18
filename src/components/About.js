import User from "./User";
import UserClass from "./UserClass";

 const About =() =>{
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React</h2>
            <User name={"Sourabh Maurya (function)"}/>
            <UserClass name={"Sourabh Maurya (class)"} location={"Molarband"}/>
        </div>
    );
 };
 export default About;