import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/gallery" component={Gallery} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
