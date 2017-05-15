import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import NewPostScene from './scenes/NewPostScene';
import EditPostScene from './scenes/EditPostScene';
import PostsList from './containers/PostListContainer'  
import Navigation from './components/Navigation'
import Header from './components/Header'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const initialState = {
  posts: {
    items: [
      {
        id: '991ea0cc-38ca-11e7-8cdd-c3178fc7b32a',
        title: 'test',
        author: 'test',
        active: true,
        keywords: "test",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Blackdeath2.gif",
        content: 'test',
        created: 1494782846156
      }
    ]
  }
}

const store = createStore(
    rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <Router>
            <div>
                <Navigation />
                <Header />
                <Switch>
                    <Route exact path="/" component={PostsList} />
                    <Route path="/new-post" component={NewPostScene} />
                    <Route path="/edit/:postId" component={EditPostScene} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)