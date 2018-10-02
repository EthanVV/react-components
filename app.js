
const GroceryListItem = (name) => <li>{name}</li>;

const GroceryList = (props) => {
  return props.map((props) =>
    GroceryListItem(props)
  );
};

let App = () => (
  <div>
    {GroceryList(['soda','soup','salmon','smoothies'])}
  </div>
)

ReactDOM.render(
  <ul><App /></ul>,
  document.getElementById('app')
);