import React from 'react';

export default class SubredditInput extends React.Component {

  constructor() {
    super();

    this.state = {input: false, text: ''};
    this.toggleInput = this.toggleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  render() {
    return this.state.input ?
    (
      <li className="subreddit-input">
        <input type="text" defaultValue={this.state.text} onChange={this.handleChange}/>
        <i className="fa fa-times" onClick={this.handleCancel}></i>
        <i className="fa fa-check" onClick={this.handleSubmit}></i>
      </li>
    )
    :
    (
      <li className="subreddit" onClick={this.toggleInput}>
        <span><i className="fa fa-plus"></i> Add Subreddit</span>
      </li>
    )
  }

  toggleInput() {
    this.setState({input: !this.state.input});
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit() {
    this.props.onSubmit(this.state.text);
    this.handleCancel();
  }

  handleCancel() {
    this.setState({input: false, text: ''});
  }

}
