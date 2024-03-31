import React,{useState,useEffect} from 'react';
// import { Domasna } from './components/Domasna';
// import {Login} from './components/Login';
import { Todos } from './components/Todos';

export function App(){
  const [car,setCar] = useState({model:"BMW",year:2010});
  const [days,setDays] = useState(["Monday","Tuesday","Wednesday"])
  const [todos,setTodos] = useState([
    {id:1,text:"Learn React",done:false},
    {id:2,text:"Eat Dinner",done:false},
    {id:3,text:"Finally Sleep",done:false},
  ]);
  const [newTodo,setNewTodo] = useState("");
  function changeCar(){
    setCar({
      ...car,
      model:"Golf",
      
    })
  }
  useEffect(()=>{
    console.log("Todos:",todos);
  },[todos]);

  function addDays(){
    setDays(["Sunday",...days,"Thursday"]);
  }

  function markTodoAsDone(todo){
    setTodos([ //item - iterator (sto ja izminuva nizata)
      ...todos.map(item=> item.id === todo.id ? //uslovot e najdi go kliknatiot element item.id(1,2,3) kliknato id pr.2
        {id:item.id,text:item.text,done:!item.done} //koga ke go najdeme kliknatiot element go menuvame samo done property-to so sprotivnoto koristejki negacija
        : item // za site ostanati odnosno ako e kliknat element 2 za 1 i 3 ostavi gi isti odnosno nepromeneti nema izmena kaj niv
        )
    ])
  }

  function addTodo(){

    let newObject = {
      id: todos.length + 1,
      text: newTodo,
      done: false
    }

    setTodos([...todos,newObject]);
    setNewTodo("");
  }
  return(
    <div id="app">
      {/* <Domasna/> */}
      {/* <Login/> */}
      <input
        type="text"
        placeholder='Enter new TODO'
        value={newTodo}
        onChange={(e)=>{setNewTodo(e.target.value)}}
      />
      <button onClick={addTodo}>Add Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone}/>
      <h2>Car Model:{car.model}</h2>
      <h2>Car Year:{car.year}</h2>
      <button onClick={changeCar}>Change Car</button>
      <ul>
        {days.map((day,i)=>(
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
    </div>
  )
}