import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const filteredHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter( el => el.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter( el => el.completed === false))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  useEffect( () => {
    getLocalTodos()
  }, [])

  useEffect( () => {
    filteredHandler()
    saveLocalTodos()
  }, [status, todos])

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  } 

  return (
    <div className="App">
      <header> 
        <h1>Dima`s ToDo List</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} setStatus={setStatus}/>
      <ToDoList todos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
