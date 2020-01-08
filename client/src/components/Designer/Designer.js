import React from 'react'
import './Designer.css'
// import Picture from "./woman.png"
import Picture from "../../assets/calliephotowoman.png"

class Designer extends React.Component {
    
    render() {
        
       return (
          <div className="wrapper">
            <div className="content">
            <img className="pic" src={Picture}/>
             </div>  
            <div className="text">
                <p>"The look on a brides face when she find sher dress - that is priceless and incredibly rewarding."</p>
                <p>Callie Tein | Designer</p>
           </div>
           </div>
       )
    }
 }

export default Designer