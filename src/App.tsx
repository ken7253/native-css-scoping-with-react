import { ListGroup, ListItem } from "./component/List";
import { Heading } from "./component/Heading";

function App() {
  return (
    <main>
      <Heading level={1}>Hello World</Heading>
      <ListGroup>
        {[1, 2, 3].map((item) => (
          <ListItem key={item}>Item {item}</ListItem>
        ))}
      </ListGroup>
      <h2>NOT Heading Component</h2>
    </main>
  );
}

export default App;
