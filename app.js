class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li key ={this.props.todo}>{this.props.todo}</li>;
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo => 
      <TodoListItem todo = {todo} />
    )}
  </ul>
)

class GroceryListItem() {
  
}

var todoList = new TodoList({todos: ['test', 'anotherTest']});

ReactDOM.render(todoList, document.getElementById('app'));
