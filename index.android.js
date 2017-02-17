/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  DrawerLayoutAndroid,
  ScrollView,
  ToolbarAndroid,
  Text,
  ListView,
  View
} from 'react-native';

import hamburger from './icons/ic_menu_white_24dp.png';

export default class Lurker extends Component {

  constructor() {

    super();

    const ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

    this.state = {posts: ds.cloneWithRows(['Hello World'])};

  }

  render() {

    let navigationView = (
      <ScrollView>
        <View style = {{height:100, backgroundColor: '#333', justifyContent: 'center'}}>
           <Text style = {{height:25, color:'white', paddingLeft: 25}}>Welcome To ReactNative</Text>
        </View>
      </ScrollView>
    )

    return (

      <DrawerLayoutAndroid

        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
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

        <ScrollView>

          <ListView
            dataSource={this.state.posts}
            renderRow={post => <Text>{post}</Text>} />

        </ScrollView>



      </DrawerLayoutAndroid>

    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#2a2a2a',
    height: 56
  }
});

AppRegistry.registerComponent('lurker', () => Lurker);
