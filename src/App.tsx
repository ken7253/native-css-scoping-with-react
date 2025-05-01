import { ListGroup, ListItem } from "./component/List";

function App() {
  return (
    <main>
      <ListGroup>
        {[1, 2, 3].map((item) => (
          <ListItem key={item}>Item {item}</ListItem>
        ))}
      </ListGroup>
    </main>
  );
}

export default App;
