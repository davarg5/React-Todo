import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type='text' name='item' />
                <button className='submitBtn'>Add to list</button>
            </form>
        )
    }
}


export default TodoForm;