
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: false};
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>
        {this.props.groceries}
      </li>
    );
  }
}

const GroceryList = (props) => (
  <ul>
    {props.groceries.map((groceries) =>
      <GroceryListItem groceries={groceries} />
    )}
  </ul>
);

var test = {
  'groceries': ['soda','soup','salmon','smoothies']
}

let App = () => (
  <div>
    {GroceryList(test)}
  </div>
);

ReactDOM.render(
  <ul><App /></ul>,
  document.getElementById('app')
);