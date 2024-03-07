import "./styles.css"
import { useState } from "react"

export default function App(){
  //return "Hello world"
  //Code below uses jsx to create a form that takes in input
  
  const [aNewItem, setNewItem] = useState("")

  const [todos, setTodos] = useState([]) // set todos to empty array



  function addToDo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false},
      
      ]
    })
  }

  /*

  *takes in the id and if its completed
  *updates the todos to be completed if they have been completed 
  *uses the currentToDOs and loops through them in an array/map
  *we check to see each one if its the one you are trying to toggle
  *if so return the todo spread out so you can get a new object and change the completed property to the completed passed in

  */
  function toggleToDO(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if (todo.id === id){
          // creates a new todo object with a new completed 
          return {...todo, completed}
        }
        // if its not the current one then do nothing or just return the todo
        return todo
      })
    })
  }

/*
deleteTodo
* takes in an id
*filters currentTodos, include all todos besides one being removed
*
*
*/
 function deleteTodo(id){
  setTodos(currentTodos =>{
    return currentTodos.filter(todo => todo.id !== id)
  })
 }

  // this function prevents page from refreshing
  function handleSubmit(e){
    e.preventDefault()


    //on submisiion 
    
    setTodos((currentValueOfStateofTodos)=>
    {
      return [
        ...currentValueOfStateofTodos,
        {id: crypto.randomUUID(), title: aNewItem, completed:
        false},
      ]
    })

  
  }
//
/*
retuns array of elements
{todos.map(todo => {

*/


//Using one component for everything
  return (
    <>
  <form onSubmit = {handleSubmit} className = "new-item-form">
    <div className = "form-row">
      <label htmlFor="item"> New Item</label>
      <input value={aNewItem} onChange={valueEntered => setNewItem(valueEntered.target.value)} type = "text" id ="item"/>
    </div>

    <button className ="btn">Add</button>
  </form>
  <h1 className ="header">Todo List</h1>
  <ul className ="list">
    {todos.length === 0 && "No Todos" }
    {todos.map(todo => {
      return(
        <li key={todo.id}>
          <label>
            <input type= "checkbox" checked={todo.completed}
            
            onChange= {e => toggleToDO(todo.id, e.target.checked)}

            />

            {todo.title}

            
      </label>
      <button className ="btn btn-danger" onClick ={
        ()=> deleteTodo(todo.id)}>Delete</button>
    </li>
  
      )
    })}
    
  </ul>
  </>
  )
  

  
}


/*
Tried breaking down in separate components
return (
  <>
  <NewToDoForm onSubmit ={addToDo}/>
<h1 className ="header">Todo List</h1>
  <ul className ="list">
    {todos.length === 0 && "No Todos" }
    {todos.map(todo => {
      return(
        <li key={todo.id}>
          <label>
            <input type= "checkbox" checked={todo.completed}
            
            onChange= {e => toggleToDO(todo.id, e.target.checked)}

            />

            {todo.title}

            
      </label>
      <button className ="btn btn-danger" onClick ={
        ()=> deleteTodo(todo.id)}>Delete</button>
    </li>
  
      )
    })}
    
  </ul>
  </>
  )
  

  
}*/