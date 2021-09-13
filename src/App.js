import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Photos from './components/Photos';
import Comments from './components/Comments';
import Posts from './components/Posts';
import EditPost from './components/EditPost';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post';

import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts/edit/:id" component={EditPost}/>
              <Photos />
            </Switch>
          </div>
        </Provider>
    </Router>
  );
}

export default App;
