import React,{useEffect,useState} from 'react';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Route,Routes} from 'react-router-dom';
import {ChildComponent} from './components/ChildComponent';
import {Error} from './components/Error';
import {Nav} from './components/Nav';
import {Users} from './components/Users';
// import {Switch,Route} from 'react-router-dom';

export function App(){

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    getUsers();
  },[]) //componentDidMount
  function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(json=>setUsers(json))
        .catch(err=>alert(err))
  }

  return(
    <div id="app">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}>
            <Route path="us" element={<ChildComponent/>}/>
        </Route>
        <Route path="/users" element={<Users usersList={users}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}
{/* <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch> */}