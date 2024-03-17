import React,{Component} from 'react';

export class StudentClass extends Component{
    
    render(){
        console.log(this.props)
        return(
            <div id="student-class">
                <h3>Student:</h3>
                <p>Name: {this.props.student.name} </p>
                <p>Address: {this.props.student.address} </p>
                <p>College: {this.props.student.college} </p>
                <p>Index: {this.props.student.index} </p>
            </div>
        )
    }

}