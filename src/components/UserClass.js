import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
      
        this.state={
            count:0,
            count2:1,
            count3:2,
            count4:3,
        };
    }
    
    render(){
        const {name,location}=this.props;
        const{count,count2,count3,count4}=this.state;
        return (
            <div className="user-card">
             <h1>Count={count}</h1>
             <h1>Count2={count2}</h1>
             <h1>Count3={count3}</h1>
             <h1>Count4={count4}</h1>
            <button
            //  Never update state variable directly
             onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+1,
              });
            }}> 
             Count Increase
             </button>
             <h2>Name:{name} </h2>
             <h3>Location:{location}</h3>
             <h4> Contact:@shmaurya123</h4>
            </div>
        );
    }
}
export default UserClass;