import React, {Component} from 'react';

class Skills extends Component{
    constructor(props){
      super(props);
     
      this.state = {
          myskills: ['HTML','CSS','JS','Node.js','React.js','MySql','Ethereum']
      }
    }

    render(){
        return(
            <div className="condiv skills">
               <h1 className="subtopic">My Skills</h1>
               <ul>
                   {this.state.myskills.map((val)=>{
                       return <li>{val}</li>
                   })}
               </ul>
            </div>
        );
    }
}

export default Skills;