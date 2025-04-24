
import '@/App.css';
import { AppRouter } from '@/routes';
import { Header, Container } from '@/layout';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
