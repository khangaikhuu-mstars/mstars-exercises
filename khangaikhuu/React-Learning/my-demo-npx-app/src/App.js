import { Jumbotron, Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>This is my React Bootstrap Header</h1>
          <p> This is my React Bootstrap Paragraph</p>
        </Container>
        <SearchForm />
        <Result />
      </Jumbotron>
    </div>
  );
}

export default App;
