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
      <div className={'post' + (this.props.stickied ? ' stickied' : '')}>
        <div className="post-header">
          <div className="post-info">
            <span className="post-title" onClick={this.toggleExpanded}>{this.props.title}</span><br />
            <span className="post-meta">{score} · {this.props.author} · {time} · </span>
            <span className="post-show" onClick={this.handleToggleComments}>{comments + (this.state.expanded ? ' (hide)' : ' (show)')}</span>
          </div>
          <div  className="post-action"><a href={this.props.url} target={'_blank'} className="fa fa-globe"></a></div>
        </div>
        {this.state.comments ? (
          <div className="post-comments" hidden={!this.state.expanded}>
            {this.state.comments.filter(child => !!child.data.body).map(comment => <Comment postAuthor={this.props.author} key={comment.data.id} {...comment.data} />)}
          </div>
        ) : null}
      </div>
    )

  }

  handleToggleComments() {
    if (!this.state.comments) {
      fetch('https://www.reddit.com/comments/' + this.props.id + '/.json')
        .then(response => response.json())
        .then(data => this.setState({comments: data[1].data.children, expanded: !this.state.expanded}))
    } else {
      this.setState({expanded: !this.state.expanded})
    }

  }

}
