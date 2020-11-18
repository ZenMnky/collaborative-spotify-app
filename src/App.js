import './App.css';
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import AppContext from './AppContext';
import Header from './AreaComponents/Header';
import Main from './AreaComponents/Main';
import Footer from './AreaComponents/Footer';
import ResultsPage from './ResultPage/ResultPage';
import SearchPage from './SearchPage/SearchPage';
import PageNotFound from './SearchPage/PageNotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Header />

        <Main>
          <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route path='/result/:artistName' component={ResultsPage} />
          <Route component={PageNotFound} />
          </Switch>
        </Main>

        <Footer />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
