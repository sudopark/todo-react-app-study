import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React from 'react';
import { Paper, List } from "@material-ui/core"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, title: "this is title", "done": true},
        { id: 1, title: "hello world", "done": false},
      ]
    };
  }


  render() {

    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className='App'> {todoItems} </div>
    );
  }
}

export default App;
