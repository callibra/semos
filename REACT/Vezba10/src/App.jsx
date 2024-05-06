import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Loading from './components/Loading';
import TodoComponents from './components/TodoComponents';
import { fetchTodos } from './actions/todosActions';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import './Styles.css';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const todos = useSelector((state) => state.todosReducers.todos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchTodos());
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <Nav />
       <Routes>
         <Route path="/todos" element={<TodoComponents />} />
         <Route path="/" element={<img id="png"src="https://i.pinimg.com/564x/5e/30/70/5e3070255e90c71a48261dad292a2478.jpg" />} />
       </Routes>
    </>
  );
}

export default App;
