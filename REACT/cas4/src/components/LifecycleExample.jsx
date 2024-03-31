import React from 'react';

export class LifecycleExample extends React.Component{

    constructor(props){
        super(props);
        console.log("This method is called from the constructor");
        this.state = {
            promenliva: "Vrednost 1"
        }
    
    }

    componentDidMount(){
        console.log("This is component did mount");
    }

    smeniVrednost = () => {
      this.setState({
        promenliva: "Nova Vrednost"
      })
    }

    render(){
        console.log("THIS IS RENDER METHOD");
        return(
            <div id="lifecycle-component">
                <h1>Class Component Lifecycle Example</h1>
                <p>Vrednost na promenliva: {this.state.promenliva} </p>
                <button onClick={this.smeniVrednost} >Click Me !</button>
            </div>
        )
    }

}