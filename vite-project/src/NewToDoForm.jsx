import { useState } from "react"

export function NewToDoForm(props){
    props.onSubmit
    const [aNewItem, setNewItem] = useState("")
   
    function handleSubmit(e){
        e.preventDefault()        
        if (aNewItem == "") return
        

        props.onSubmit(aNewItem)
        setNewItem("")
      
      }
   
    return (
    
    <form onSubmit = {handleSubmit} className = "new-item-form">
        <div className = "form-row">
            <label htmlFor="item"> New Item</label>
            <input value={aNewItem} onChange={valueEntered => setNewItem(valueEntered.target.value)} type = "text" id ="item"/>
        </div>

        <button className ="btn">Add</button>
  </form>
  
    )
}