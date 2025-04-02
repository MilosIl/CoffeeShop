import { BrowserRouter } from 'react-router';
import './App.css';
import { AppRouter } from './routes';
import { Header, Container } from './layout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
