import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {AppRegistry} from 'react-native';

import reducer from './store/reducers';
import {fetchPosts} from './store/actions';

import Application from './components/application';

export default class Lurker extends React.Component {

  render() {

    let store = createStore(reducer, applyMiddleware(thunk));

    return (

      <Provider store={store}>

        <Application />

      </Provider>

    )

  }

}

AppRegistry.registerComponent('lurker', () => Lurker);
