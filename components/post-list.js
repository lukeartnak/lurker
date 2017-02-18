import React from 'react';
import {connect} from 'react-redux';

import {StyleSheet, ScrollView, ListView, View, ActivityIndicator} from 'react-native';

import Post from './post';

class PostList extends React.Component {

  constructor() {

    super();

    this.ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

  }

  render() {

    return this.props.fetching ? (

      <View>

        <ActivityIndicator
          style={{padding: 16}}
          size="large"
        />

      </View>

    ) : (

      <ScrollView>

        <ListView
          enableEmptySections={true}
          dataSource={this.ds.cloneWithRows(this.props.posts)}
          renderRow={post => <Post {...post} /> }
          renderSeparator={(_, id) => <View key={id} style={styles.separator} />}
        />

      </ScrollView>

    )

  }

}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

function mapStateToProps(state) {

  let subreddit = state.subreddits[state.selectedSubreddit];

  return subreddit ? {...subreddit} : {fetching: true};

}

export default connect(mapStateToProps)(PostList);
