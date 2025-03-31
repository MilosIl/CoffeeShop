import { BrowserRouter } from 'react-router';
import '@/App.css';
import { AppRouter } from '@/routes';
import { Header, Container } from '@/layout';
import { ShopCart } from '@/components/ShopCart/';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <AppRouter />
      </Container>
      <ShopCart />
    </BrowserRouter>
  );
}

export default App;
