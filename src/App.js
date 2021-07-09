import Home from './components/Home/Home';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/gallery" component={Gallery} />
          <Redirect from = "/" to = "/home"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
