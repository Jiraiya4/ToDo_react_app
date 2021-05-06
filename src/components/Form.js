import React from 'react';

const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {

    const onInputChange = (e) => {
        setInputText(e.target.value);
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(inputText){
            setTodos([
                ...todos,
                {text: inputText, completed: false, id: Math.random() * 1000}
            ])
        }
        return {...todos}
      }

      const onChangeFilter = (e) => {
          setStatus(e.target.value)
      }

    return (
        <form onSubmit={onSubmitHandler}>
            <input value={inputText} onChange={onInputChange} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={onChangeFilter} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;