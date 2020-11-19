//dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//styles
import 'normalize.css';
import './App.css';

//components
import {AppContext} from '../Context/AppContext';
import Header from '../AreaComponents/Header';
import Main from '../AreaComponents/Main';
import Footer from '../AreaComponents/Footer';
import ResultsPage from '../ResultPage/ResultPage';
import SearchPage from '../SearchPage/SearchPage';
import PageNotFound from '../SearchPage/PageNotFound';


class App extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.handleGetAuthToken();
    console.log('app did mount');
  }

  render() {

    console.log(this.context);

    return (
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
    );
  }
}

export default App;
