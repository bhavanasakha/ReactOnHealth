import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Prescription extends Component{
    render(){
        if( !this.props.prescriptionDataProp ){
            return(
                <div>
                        <h4>Please select the symptom</h4>
                </div>
            );
        }
        return(
            <div>
                <label>Medicine for the selected symptom is:</label>
                <h4>{this.props.prescriptionDataProp}</h4>                   
            </div>
        );
    }
}

export default Prescription;