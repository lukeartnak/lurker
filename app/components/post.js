import React from 'react';
import moment from 'moment';

import Comment from 'components/comment';

export default class Post extends React.Component {

  constructor() {
    super();

    this.state = {expanded: false};
    this.handleToggleComments = this.handleToggleComments.bind(this);
  }

  render() {

    let score = this.props.score.toLocaleString();
    let time = moment.utc(this.props.created_utc*1000).fromNow();
    let comments = this.props.num_comments + ' comments';

    return (
      <div className="post">
        <div className="post-header">
          <span className="post-title" onClick={this.toggleExpanded}>{this.props.title}</span><br />
          <span className="post-meta">{score} · {this.props.author} · {time} · </span>
          <span className="post-show" onClick={this.handleToggleComments}>{comments + (this.state.expanded ? ' (hide)' : ' (show)')}</span>
        </div>
        {this.state.comments ? (
          <div className="post-comments" hidden={!this.state.expanded}>
            {this.state.comments.map(comment => <Comment level={1} key={comment.data.id} {...comment.data} />)}
          </div>
        ) : null}
      </div>
    )

  }

  handleToggleComments() {
    if (!this.state.comments) {
      fetch('https://www.reddit.com/comments/' + this.props.id + '/.json')
        .then(response => response.json())
        .then(data => this.setState({comments: data[1].data.children.slice(0, 10), expanded: !this.state.expanded}))
    } else {
      this.setState({expanded: !this.state.expanded})
    }

  }

}
