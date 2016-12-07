import React from 'react';

import Post from 'components/post';

export default class PostList extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ul className="post-list">
        {this.props.posts.map(post => <Post key={post.data.id} title={post.data.title} />)}
      </ul>
    )
  }

}
