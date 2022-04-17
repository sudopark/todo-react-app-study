
import './App.css';
import Todo from './Todo';
import React from 'react';
import { Paper, List, Container, AppBar, Toolbar, Grid, Typography, Button } from "@material-ui/core"
import AddTodo from './AddTodo';
import { call } from './ApiService';
import { signout } from './ApiService';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({isLoading: true})
    call("/todo", "GET")
    .then((response) => 
      this.setState({items: response.data, isLoading: false})
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

    var navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justify='space-between' container>
            <Grid item>
              <Typography variant='h6'>오늘의 할일</Typography>
            </Grid>
            <Grid>
              <Button color='inherit' onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.addItem}/>
          <div className="TodoList"> {todoItems} </div>
        </Container>
      </div>
    );

    var loadingPage = (
      <h1> 로딩중.. </h1>
    );

    var content = loadingPage;
    if(!this.state.isLoading) {
      content = todoListPage;
    }

    return (
      <div className='App'> 
        {content}
      </div>
    );
  }
}

export default App;
