import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Books
            books={[
              { title: 'mybook', id: 1 },
              { title: 'yourbook', id: 2 },
            ]}
          />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
