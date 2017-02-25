import React from 'react';

import {StyleSheet, Linking, TouchableNativeFeedback, View, Text} from 'react-native';

export default class PostHeader extends React.Component {

  render() {

    return (

      <TouchableNativeFeedback>

        <View style={styles.post}>

          <Text>{this.props.score}</Text>

          <Text style={styles.title}>{this.props.title}</Text>

          <Text style={styles.meta}>
            {this.props.comments} Comments &middot; {this.props.author} &middot; {this.props.posted} &middot; {this.props.subreddit}
          </Text>

        </View>

      </TouchableNativeFeedback>

    )

  }

}

const styles = StyleSheet.create({
  post: {
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 56,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333'
  },
  meta: {
    fontSize: 10,
  }
});
