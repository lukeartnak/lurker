import React from 'react';

import {StyleSheet, Linking, TouchableNativeFeedback, View, Text} from 'react-native';

export default class Post extends React.Component {

  render() {

    return (

      <TouchableNativeFeedback onPress={() => Linking.openURL(this.props.url).catch(err => console.error('An error occurred', err))}>

        <View style={styles.post}>

          <Text style={styles.title}>{this.props.title}</Text>

          <Text style={styles.meta}>
            {this.props.num_comments} Comments &middot; {this.props.author} &middot; {this.props.created_utc} &middot; {this.props.subreddit}
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
