import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Symptoms from './components/symptoms';
import Prescription from './components/prescription';

class App extends Component{
    //constructor
    constructor(props){
        super(props);
        
        this.state = {
            selectedSymptom : [],
            prescriptionMed : '',
            options : [
                {value:'cold', text:'Cold'},
                {value:'stomachAche', text:"Stomach Ache"},
                {value:'fever', text:"Fever"}
            ]  
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        
        let checkedValue = e.target.value;
        let sympList = this.state.selectedSymptom;
        
        if( sympList.indexOf(checkedValue) == -1 ){
            this.state.selectedSymptom.push(checkedValue);
            console.log("add : ", checkedValue);
        }else{            
            this.state.selectedSymptom.splice(sympList.indexOf(checkedValue),1);
            console.log("remove : ", checkedValue);
        }
        
        if( sympList.indexOf('cold') > -1 && sympList.indexOf('stomachAche') > -1 && sympList.indexOf('fever') > -1){
            this.setState({
                prescriptionMed : "Please visit Doctor!!!"
            });
        }else if( sympList.indexOf('cold') > -1 && sympList.indexOf('stomachAche') > -1 ){
            this.setState({
                prescriptionMed : "Sinarest and Endoper"
            });
        }
        else if ( sympList.indexOf('cold') > -1 && sympList.indexOf('fever') > -1 ){
            this.setState({
                prescriptionMed : "Sinarest and Dolo"
            });
        }
        else if ( sympList.indexOf('stomachAche') > -1 && sympList.indexOf('fever') > -1 ){
            this.setState({
                prescriptionMed : "Endoper and Dolo"
            });
        }
        else if( sympList.indexOf('cold') > -1 ){
            this.setState({
                prescriptionMed : "Sinarest"
            });
        }else if( sympList.indexOf('stomachAche') > -1 ){
            this.setState({
                prescriptionMed : "Endoper"
            });
        }else if( sympList.indexOf('fever') > -1 ){
            this.setState({
                prescriptionMed : "Dolo"
            });
        }else if(sympList.length == 0 ){
            this.setState({
                prescriptionMed : ""
            });
        }
    }
    
    render(){
        return(
            <div>
                <h1 className="header">Patient Health Monitoring</h1>
                <div className="symptom-div">
                    <Symptoms optionsProp={this.state.options} symPropUpdate={this.handleClick} />
                </div>
                <div className="prescription-div">
                    <Prescription prescriptionDataProp={this.state.prescriptionMed} />
                </div>
                
                
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);

//import MulChkBox from './components/multi_select_checkbox_test';
//
//class App extends Component{
//    
//    constructor(props){
//        super(props);
//        
//        this.state = {
//            options: [
//                {value: 'selectAll', text:'Select All'},
//                {value: 'orange', text:'Orange'},
//                {value: 'apple', text:'Apple'},
//                {value: 'grape', text:'Grape'}
//            ]
//        };
//        
//        this.handleClick = this.handleClick.bind(this);
//    }
//    
//    handleClick(e) {
//        console.log("Hiii",e.target.value);
//    }
//    render(){
//       return (
//        <div className='SelectBox'>
//            <form>
//                <MulChkBox chkOptions={this.state.options} propsChkClick={this.handleClick} />
//            </form>
//        </div>
//        );
//    }
//}
//
//ReactDOM.render(
//    <App />,
//    document.querySelector('.container')
//);


//import CheckBox from './components/checkbox';
//
//class App extends React.Component{
//    
//    constructor(props){
//        super(props);
//        
//        this.state = {
//            checkboxState : true
//        };
//        
//        this.handleClick = this.handleClick.bind(this);
//    }
//    
//    handleClick(){
//        console.log(this.state.checkboxState);
//        this.setState( prevState => ({
//                checkboxState: !prevState.checkboxState
//            }));
//    }
//    
//    render(){
//        return(
//            <div>
//                <CheckBox myDataProp={this.state.checkboxState} updateStateProp={this.handleClick} />
//            </div>
//        );
//    }
//}
//
//ReactDOM.render(<App />, document.querySelector('.container'));
