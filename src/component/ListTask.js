import React from 'react'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter } from '../redux/filterSlice';
import '../styles/listTask.css'

const ListTask = () => {
  const dispatch = useDispatch()
    const todos = useSelector((state) =>state.todos);
    const filter = useSelector((state) =>state.filter);
  return (
    <>
    <ul >
    <div className='select'>
    <select  onChange={(e)=>dispatch(addFilter(e.target.value))}>
                <option value="All">All</option>
                <option value="Done">Done</option>
                <option value="Not Done">not Done</option>
            </select>
            </div>
			{todos.filter(el=> filter=="All" ? el : filter=='Done' ? el.done==true: el.done==false).map((todo) => (
				<Task id={todo.id} title={todo.title}  done={todo.done} />
			))}
		</ul>
 
    </>
  )
};


export default ListTask