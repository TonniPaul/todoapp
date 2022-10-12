import "./todo.css"
import Card from "../../UI/card/Card"
import checked from '../../assets/icon-check.svg'
import { useState } from "react"
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const Todo = () => {
   const [ taskTodo, setTaskTodo ]=useState()

   const handleChange = (e) => {
      setTaskTodo(e.target.value)
   }
  return (
   <div className="todo-cont">
      <Card className='global-styke' >
         <div className="data-cont">
            <div className="checked">
            </div>
            <input type="text" placeholder="Create a new Todo" className="newTodo" onChange={handleChange}/>
         </div>
      </Card>
      <Card className='global-styke' >
         <div className="data-cont">
            <div className="checked">
               <img src={checked} alt="" className= 'icon' />
            </div>
            <p className="newTodo">{taskTodo}</p>
            <span class="material-symbols-outlined">close</span>
         </div>
      </Card>
      <Card className='global-styke todo-data todo-data-mb' >
         <span>0 items left</span>
         <span>Clear Completed</span>
      </Card>
      <Card className="global-styke todo-data todo-data-lg">
         <span className="hide-on-mb">0 items left</span>
         <div className="section-nav">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
         </div>
         <span className="hide-on-mb">Clear Completed</span>
      </Card>

   </div>
  )
}

export default Todo;