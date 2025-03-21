import { BrowserRouter } from 'react-router';
import './App.css';
import { AppRouter } from './routes';
import { Container } from './components';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
