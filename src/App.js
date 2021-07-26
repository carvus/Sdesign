import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import Language from './contexts/language';
import { withI18n } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';

function App( { i18n } ) {
  const [ currentLanguage, setCurrentLanguage ] = useState(i18n.language);
  useEffect( ()=>{
    i18n.on('languageChanged', function(lng) {
      setCurrentLanguage( lng );
    })
  }, [i18n]);
  
  return (
    <div className="App">
      <Language.Provider value={currentLanguage}>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/gallery" component={Gallery} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </Language.Provider>
    </div>
  );
}

export default withI18n()(App);
