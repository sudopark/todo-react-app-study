
import './App.css';
import Todo from './Todo';
import React from 'react';
import { Paper, List, Container } from "@material-ui/core"
import AddTodo from './AddTodo';
import { call } from './ApiService';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    call("/todo", "GET").then((response) => 
      this.setState({items: response.data})
    );
  }

  addItem = (item) => {
    call("/todo", "POST", item).then((response) => {
      this.setState({items: response.data});
    })
  }

  deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) => {
      this.setState({items: response.data});
    })
  }

  updateItem = (item) => {
    call("/todo", "PUT", item).then((response) => {
      this.setState({items: response.data});
    })
  }

  render() {

    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.deleteItem} 
              update={this.updateItem}
            />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className='App'> 
        <Container maxWidth="md">
          <AddTodo add={this.addItem}/>
          <div className="TodoList"> {todoItems} </div>
        </Container>
      </div>
    );
  }
}

export default App;
