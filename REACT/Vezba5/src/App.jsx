import React,{useState,useEffect} from 'react';
import { Todos } from './components/Todos';

export function App(){
  const [todos,setTodos] = useState([
    {id:1,text:"Learn React",done:false},
    {id:2,text:"Eat Dinner",done:false},
    {id:3,text:"Finally Sleep",done:false},
  ]);
  const [newTodo,setNewTodo] = useState("");

  useEffect(()=>{
    console.log("Todos:",todos);
  },[todos]);

  function markTodoAsDone(todo){
    setTodos([ //item - iterator (sto ja izminuva nizata)
      ...todos.map(item=> item.id === todo.id ? //uslovot e najdi go kliknatiot element item.id(1,2,3) kliknato id pr.2
        {id:item.id,text:item.text,done:!item.done} //koga ke go najdeme kliknatiot element go menuvame samo done property-to so sprotivnoto koristejki negacija
        : item // za site ostanati odnosno ako e kliknat element 2 za 1 i 3 ostavi gi isti odnosno nepromeneti nema izmena kaj niv
        )
    ])
  }
  
  function deleteTodo(todoId){
     setTodos([
      ...todos.filter(item => item.id !== todoId)
     ])
  }
  
  function addTodo(){
    if(newTodo.trim() !==""){

    let newObject = {
      id: Math.ceil(Math.random()*1000),
      text: newTodo,
      done: false
    }

    setTodos([...todos,newObject]);
    setNewTodo("");
   }
   else{
    alert("Enter some value")
   }
  }
  return(
    <div id="app">
      <input
        type="text"
        placeholder='Enter new TODO'
        value={newTodo}
        onChange={(e)=>{setNewTodo(e.target.value)}}
      />
      <button onClick={addTodo}>Add Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} deleteTodo={deleteTodo}/>
    </div>
  )
}