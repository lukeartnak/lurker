import React from 'react';
import decode from 'decode-html';
import moment from 'moment';

export default class Comment extends React.Component {

  render() {
    console.log(this.props);
    let score = this.props.score.toLocaleString();
    let time = moment.utc(this.props.created_utc*1000).fromNow();
    let replies = this.props.replies.data;

    return (
      <div className="post-comment">
        <span className="comment-header">
        <span className={'comment-author' + (this.props.author == this.props.postAuthor ? ' submitter' : '')}>{this.props.author}</span> · {score} · {time}
        </span>
        <div className="comment-text" dangerouslySetInnerHTML={{__html: decode(this.props.body_html)}}></div>
        {replies ? replies.children.filter(child => !!child.data.body).map(reply => <Comment key={reply.data.id} postAuthor={this.props.postAuthor} {...reply.data} />) : null}
      </div>
    )
  }

}
