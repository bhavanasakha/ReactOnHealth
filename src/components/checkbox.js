import React from 'react';

const CheckBox = (props) => {
    return(
        <div>
            <input type="checkbox" onClick={props.updateStateProp} />
            <label>Checkbox</label>
            <h4>{props.myDataProp ? 'Unchecked' : 'Checked'}</h4>
        </div>
    );
};

export default CheckBox;

//class CheckBox extends React.Component{
//    render(){
//        return(
//            <div>
//            <input type="checkbox" onClick={this.props.updateStateProp} />
//            <label>Checkbox</label>
//            <h4>{this.props.myDataProp ? 'Unchecked' : 'Checked'}</h4>
//            </div>
//        );
//    }
//}