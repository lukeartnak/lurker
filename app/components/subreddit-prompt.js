import React from 'react';

export default class SubredditPrompt extends React.Component {

  constructor() {
    super();

    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return this.props.show ? (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <span>Add a Subreddit</span>
          </div>
          <div className="modal-body">
            <input className="modal-input" type="text" onChange={this.handleChange} defaultValue={this.state.text} />
          </div>
          <div className="modal-footer">
            <button type="button" onClick={this.handleSubmit}>Add</button>
            <button type="button" onClick={this.handleCancel}>Cancel</button>
          </div>

        </div>
      </div>
    ) : null;
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleCancel() {
    this.setState({text: ''});
    this.props.onClose();
  }

  handleSubmit() {
    this.props.onSubmit(this.state.text);
    this.handleCancel();
  }

}
