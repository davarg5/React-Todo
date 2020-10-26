// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const TodoList = props => {

    const handleClick = () => {
        props.clearItems()
    }
    
    return (
        <div>
            {props.list.map(item => (
                <Todo item={item} key={item.id} handleToggleItem={props.handleToggleItem}/>
            ))}
            <button onClick={handleClick}>Clear Completed Tasks</button>
        </div>

    )
}


export default TodoList;