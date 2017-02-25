import React from 'react';
import {StyleSheet, DrawerLayoutAndroid, StatusBar, ToolbarAndroid} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts, selectSubreddit} from '../store/actions';

import MenuIcon from '../icons/menu-icon.png';
import PostList from './post-list';
import SubredditList from './subreddit-list';

class Application extends React.Component {

  render() {

    return (

      <DrawerLayoutAndroid

        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SubredditList closeDrawer={() => this.refs['drawer'].closeDrawer()} />}
        ref="drawer">

        <StatusBar
          backgroundColor="#1a1a1a"
          barStyle="light-content"/>

        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.subreddit}
          titleColor="#ffffff"
          navIcon={MenuIcon}
          onIconClicked={() => this.refs['drawer'].openDrawer()}
        />

        <PostList />

      </DrawerLayoutAndroid>

    )

  }

  componentDidMount() {

    this.props.fetchPosts('all');

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

function mapState(state) {

  return {subreddit: state.selectedSubreddit};

}

function mapDispatch(dispatch) {

  return bindActionCreators({fetchPosts, selectSubreddit}, dispatch);

}

export default connect(mapState, mapDispatch)(Application)
