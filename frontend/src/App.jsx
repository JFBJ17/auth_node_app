import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Layout from './Components/Layout';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
