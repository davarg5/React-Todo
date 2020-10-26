import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      list: list
    }
  }

  handleToggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item;
        }
      })
    })
  }

  clearItems = () => {
    this.setState({
      list: this.state.list.filter(item =>
        (!item.completed))
    });
  }



  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>

        <TodoList list={this.state.list} handleToggleItem={this.handleToggleItem} clearItems={this.clearItems}/>
        <TodoForm />
      </div>

    );
  }
}

export default App;
