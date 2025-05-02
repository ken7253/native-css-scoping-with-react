import { ListGroup, ListItem } from "./component/List";
import { Heading } from "./component/Heading";
import { Card } from "./component/Card";

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
      <Card title="Card Title">
        <ListGroup>
          {[1, 2, 3].map((item) => (
            <ListItem key={item}>Item {item}</ListItem>
          ))}
        </ListGroup>
      </Card>
    </main>
  );
}

export default App;
