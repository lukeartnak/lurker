import React from 'react';

import {StyleSheet, ScrollView} from 'react-native';

import PostHeader from './post-header';

export default class Post extends React.Component {

  render() {

    return (

      <ScrollView>

        <PostHeader {...this.props.post} />

      </ScrollView>

    )

  }

}

const styles = StyleSheet.create({

});
