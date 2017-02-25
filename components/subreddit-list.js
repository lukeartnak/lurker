import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../store/actions';

import {StyleSheet, ScrollView, ListView, View, TouchableNativeFeedback, Image, Text} from 'react-native';

import DrawerHeader from '../icons/drawer-header.jpg';
import DropdownIcon from '../icons/dropdown-icon.png';
import ReorderIcon from '../icons/reorder-icon.png';

class SubredditList extends React.Component {

  constructor() {

    super();

    this.ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

  }

  render() {

    return (

      <ScrollView>

        <Image style={styles.drawerHeader} source={DrawerHeader}>

          <View style={styles.headerTextContainer}>

            <Text style={styles.headerText}>Lurker for Reddit</Text>

          </View>

        </Image>

        <View style={styles.container}>

          <Image style={styles.icon} source={DropdownIcon} />

          <Text style={styles.header}>Subreddits</Text>

        </View>

        <ListView
          dataSource={this.ds.cloneWithRows(this.props.subreddits)}
          renderRow={subreddit => (

            <TouchableNativeFeedback onPress={this.selectSubreddit.bind(this, subreddit)}>

              <View style={styles.container}>

                <Image style={styles.icon} source={ReorderIcon} />

                <Text style={styles.subreddit}>{subreddit}</Text>

              </View>

            </TouchableNativeFeedback>

          )}
        />

      </ScrollView>

    )


  }

  selectSubreddit(subreddit) {

    this.props.fetchPosts(subreddit);
    this.props.closeDrawer();

  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginLeft: 16
  },
  drawerHeader: {
    justifyContent: 'flex-end',
    height: 164
  },
  headerTextContainer: {
    padding: 16
  },
  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  },
  icon: {
    height: 24,
    width: 24
  },
  header: {
    paddingLeft: 32,
    color: '#000',
    fontSize: 18
  },
  subreddit: {
    paddingLeft: 32,
  }
});

function mapStateToProps(state) {

  return {subreddits: state.subscriptions};

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchPosts}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditList);
