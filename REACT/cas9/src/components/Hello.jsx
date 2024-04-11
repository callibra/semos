import React from 'react';
import {connect} from 'react-redux';
import {sayGoodbye, sayHello} from './../actions/SayHelloActions';

class Hello extends React.Component{

    componentDidMount(){
        this.props.getGreeting();
        this.props.farewellFunc();
    }
    
    render(){
        return(
            <div id='hello'>
                <h1>{this.props.greeting}</h1>
                <h1>{this.props.farewell}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        greeting: state.SayHelloReducer.greeting,
        farewell: state.SayHelloReducer.farewell
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getGreeting: ()=>{
            dispatch(sayHello())
            // sayHello()
        },
        farewellFunc: ()=>{
            dispatch(sayGoodbye())
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello)