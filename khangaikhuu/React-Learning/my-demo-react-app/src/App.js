import { Container, Button } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

function App() {
  return (
    <div>
      <Container>
        <Button variant="primary">React Bootstrap Button</Button>
        <SearchForm />
        <Results />
      </Container>
    </div>
  );
}

export default App;
