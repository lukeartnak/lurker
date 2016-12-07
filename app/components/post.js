import React from 'react';
import decode from 'decode-html';

export default class Post extends React.Component {

  constructor() {
    super();

    this.state = {showText: false};
    this.toggleText = this.toggleText.bind(this);
    this.getText = this.getText.bind(this);
  }

  render() {
    return this.state.showText ?
    (
      <div className="post">
        <span className="post-text" onClick={this.toggleText}>{this.props.title}</span>
        <div dangerouslySetInnerHTML={{__html: this.getText()}}></div>
      </div>
    )
    :
    (
      <div className="post">
        <span onClick={this.toggleText}>{this.props.title}</span>
      </div>

    )
  }

  toggleText() {
    this.setState({showText: !this.state.showText});
  }

  getText() {
    return decode(this.props.text);
  }

}
