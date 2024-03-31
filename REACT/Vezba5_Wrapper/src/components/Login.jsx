import React,{useState,useEffect} from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";
import './Style.css';

export const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [comment,setComment] = useState("");
    const [inputType,setInputType] = useState("password");
    const [longComment,setLongComment] = useState(false);
    const [selectedOption,setSelectedOption] = useState("Facebook")

    const elements = [
        {value:"Facebook",name:"Facebook"},
        {value:"Instagram",name:"Instagram"},
        {value:"SnapChat",name:"SnapChat"}
];

    useEffect(()=>{
        console.log("Username: ",username)
        console.log("Password: ",password)
        console.log("Comment: ",comment)
    },[username,password,comment])

    function handleInputChange(){
        setInputType(inputType === "password" ? "text" : "password")
    }

    function showValues(event){
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`)
    }
  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input 
        type="text" 
        placeholder={"Enter Username"} 
        value={username} 
        onChange={(e)=>{setUsername(e.target.value)}} />
        <Input 
        type={inputType} //vo state so vrednost -> "password"
        placeholder={"Enter Password"}
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        name="password"
        setToggle={handleInputChange}
        />
        <Input
        type="text"
        placeholder={"Enter Comment"}
        value={comment}
        name={"comment"}
        onChange={(e)=>{setComment(e.target.value)}}
        renderTextArea={longComment}
        changeInput={()=>{setLongComment(!longComment)}}
        />
        <Dropdown elements={elements} onChange={(e)=>{setSelectedOption(e.target.value)}}/>
        <button>Sign In</button>
      </form>
    </div>
  );
};

