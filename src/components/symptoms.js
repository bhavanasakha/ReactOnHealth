import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Symptoms = (props) => {
    
    const symptomItems = props.optionsProp.map(option => {
        return(
            <div>
                <input type="checkbox" onClick={props.symPropUpdate}
                    name={option.value} value={option.value} key={option.value} />
                {option.text}
            </div>
        );
    });
    
    return(
        <div>
            {symptomItems}
        </div>
    );
}

export default Symptoms;