import React,{useState,useEffect} from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";

export const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [comment,setComment] = useState("");
    const [inputType,setInputType] = useState("password");
    const [longComment,setLongComment] = useState(false);
    const [selectedOption,setSelectedOption] = useState(1)

    const elements = [
      { value: 1, name: "Facebook" },
      { value: 2, name: "Instagram" },
      { value: 3, name: "SnapChat" },
    ];

    useEffect(()=>{
       console.log("OPTION: ",selectedOption)
 
    },[selectedOption])

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
