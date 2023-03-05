import React from "react";
import "./InputOptions.css";

const InputOptions = ({ title, Icon, color='#000000' }) => {
    return ( 
        <div className="input-options">
            <Icon style={{color: color}} className="input-options-icon"/>
            <h4 className='input-options-title'>{title}</h4>
        </div>


     );
}
 
export default InputOptions;