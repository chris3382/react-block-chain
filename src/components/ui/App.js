import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import Blocklist from '../blocks/block-list';
import SingleBlock from '../blocks/single-block';
import SingleTransaction from '../blocks/single-transaction';
import TransactionBlock from '../blocks/latest-block';
import theme from './theme';
import Header from './header'


function App() {
  return (
    <Fragment>
    <ThemeProvider theme={theme}>
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Blocklist}/>
        <Route path="/singleblock" component={SingleBlock}/>
        <Route path="/singletransact" component={SingleTransaction}/>
        <Route path="/latestblock" component={TransactionBlock}/>
      </Switch>
      </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
