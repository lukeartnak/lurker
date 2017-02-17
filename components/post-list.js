import React from 'react';

import {StyleSheet, ScrollView, ListView, View} from 'react-native';

import Post from './post';

import axios from 'axios';

export default class PostList extends React.Component {

  constructor() {

    super();

    ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

    this.state = {posts: ds.cloneWithRows([{data: {title: 'hello'}}])};

    axios.get('https://www.reddit.com/r/all.json')
      .then(response => response.data.data.children)
      .then(posts => this.setState({posts: ds.cloneWithRows(posts)}));

  }

  render() {

    return (

      <ScrollView>

        <ListView
          enableEmptySections={true}
          dataSource={this.state.posts}
          renderRow={post => <Post {...post.data} /> }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}/>

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
