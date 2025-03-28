import { BrowserRouter } from 'react-router';
import './App.css';
import { AppRouter } from './routes';
import { Header, Container } from './layout';
import { CoffeeImage } from './components/CoffeeImage';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
