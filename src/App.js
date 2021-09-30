import { Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
// PAGES
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/gallery"><Gallery /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/cart"><Cart /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
