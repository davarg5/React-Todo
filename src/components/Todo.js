import React from 'react';


const Todo = props => {
    
    const handleClick = () => {
        props.handleToggleItem(props.item.id);
    }

    return (
        <div className={`item${props.item.completed ? ' completed' : ''}`} onClick={handleClick} >
            <p>{props.item.task}</p>
        </div>

    )
}


export default Todo;