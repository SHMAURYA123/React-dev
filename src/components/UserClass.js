import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
      
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
            
        };
        // console.log(this.props.name+"Child constructor called");
    }

  async  componentDidMount(){ 
         // component did mount used API call 
        // console.log(this.props.name+"Child constructor Did Mount");
       const data=await fetch("https://api.github.com/users/shmaurya123");
        const json=await data.json();
      this.setState({
        userInfo:json,
      });
        console.log(json);
    }
    
    render(){
        const {name,location,avatar_url}=this.state.userInfo;;
        

        // console.log(this.props.name+"child render");
        
        return (
            <div className="user-card">
             <img src={avatar_url}/>
             <h2>Name:{name} </h2>
             <h3>Location:{location}</h3>
             <h4> Contact:@shmaurya123</h4>
            </div>
        );
    }
}
export default UserClass;