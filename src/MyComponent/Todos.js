import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin: "40px auto",
        border:"1px solid gray"

    }
    return (
        <div className="container my-3 bg-light text-dark" style={myStyle}>
            <h3 className="my-3"> Todos List</h3>
            {props.todos.length===0? "No Todos Display":
            props.todos.map((todo)=>{
                return(
                    <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
                </>
                )
            })
            }
            
        </div>
    )
}

