import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AllAuthors from './components/AllAuthors'
import AddNewAuthor from './components/AddNewAuthor'
import EditAuthor from './components/EditAuthor'
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <AllAuthors></AllAuthors>
          </Route>
          <Route exact path="/new">
            <AddNewAuthor></AddNewAuthor>
          </Route>
          <Route exact path="/edit/:_id">
            <EditAuthor></EditAuthor>
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
