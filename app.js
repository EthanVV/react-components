
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.groceries}</li>
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
)

ReactDOM.render(
  <ul><App /></ul>,
  document.getElementById('app')
);