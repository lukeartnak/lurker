import React from 'react';
import decode from 'decode-html';
import moment from 'moment';

export default class Comment extends React.Component {

  render() {

    let score = this.props.score.toLocaleString();
    let time = moment.utc(this.props.created_utc*1000).fromNow();
    let replies = this.props.replies.data;

    return (
      <div className="post-comment">
        <span>{score} · {this.props.author} · {time}</span>
        <div className="comment-text" dangerouslySetInnerHTML={{__html: decode(this.props.body_html)}}></div>
        {replies && this.props.level < 5 ? replies.children.map(reply => <Comment key={reply.data.id} level={this.props.level+1} {...reply.data} />) : null}
      </div>
    )
  }

}
