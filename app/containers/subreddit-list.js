import React from 'react';

import Subreddit from 'components/subreddit';

export default class SubredditList extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ul className="subreddit-list">
        <li className="subreddit" onClick={this.props.onSubredditPrompt}><i className="fa fa-plus"></i></li>
        {this.props.subreddits.map(subreddit => <Subreddit
          key={subreddit}
          name={subreddit}
          onSelect={this.props.onSubredditSelect.bind(this, subreddit)}
          />)}
      </ul>
    )
  }

}
