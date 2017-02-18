import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../store/actions';

import {StyleSheet, ScrollView, ListView, View, TouchableNativeFeedback, Image, Text} from 'react-native';

import DropdownIcon from '../icons.dropdown-icon.png';
import ReorderIcon from '../icons.reorder-icon.png';

class SubredditList extends React.Component {

  constructor() {

    super();

    this.ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

  }

  render() {

    return (

      <ScrollView>

        <View style={styles.container}>

          <Image style={styles.icon} source={DropdownIcon} />

          <Text style={styles.header}>Subreddits</Text>

        </View>

        <ListView
          dataSource={this.ds.cloneWithRows(this.props.subreddits)}
          renderRow={subreddit => (

            <TouchableNativeFeedback onPress={() => this.props.fetchPosts(subreddit)}>

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

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginLeft: 16
  },
  icon: {
    height: 24,
    width: 24
  },
  header: {
    paddingLeft: 32,
    fontWeight: '500',
    color: '#000'
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
