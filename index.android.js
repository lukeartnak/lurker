import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
  AppRegistry, StyleSheet,
  DrawerLayoutAndroid, StatusBar, ToolbarAndroid
} from 'react-native';

import reducer from './store/reducers';

import hamburger from './icons/ic_menu_white_24dp.png';

import PostList from './components/post-list';

class Application extends React.Component {

  constructor() {

    super();

  }

  render() {

    return (

      <DrawerLayoutAndroid

        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {}}
        ref="drawer">

        <StatusBar
          backgroundColor="#1a1a1a"
          barStyle="light-content"/>

        <ToolbarAndroid
          style={styles.toolbar}
          title="Lurker"
          titleColor="#ffffff"
          navIcon={hamburger}
          onIconClicked={() => this.refs['drawer'].openDrawer()}
        />

        <PostList />

      </DrawerLayoutAndroid>

    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#2a2a2a',
    height: 56
  }
});

export default class Lurker extends React.Component {

  render() {

    let store = createStore(reducer);

    return (

      <Provider store={store}>

        <Application />

      </Provider>

    )

  }

}

AppRegistry.registerComponent('lurker', () => Lurker);
