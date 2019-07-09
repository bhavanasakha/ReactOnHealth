import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MulChkBox = (props) => {
    const optionItems = props.chkOptions.map((option) => {
        return(
            <div>
                <input onClick={props.propsChkClick} type='checkbox' name={option.value} key={option.value}
               value={option.value} />
               {option.text}
            </div>
        );                            
    });
    
    return(
        <div>
            {optionItems}
        </div>
    );
};

export default MulChkBox;