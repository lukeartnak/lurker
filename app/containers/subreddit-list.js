import React from 'react';

import Subreddit from 'components/subreddit';
import SubredditInput from 'components/subreddit-input';

export default class SubredditList extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ul className="subreddit-list">
        {this.props.subreddits.map(subreddit => <Subreddit
          key={subreddit}
          name={subreddit}
          onSelect={this.props.onSubredditSelect.bind(this, subreddit)}
          />)}
        <SubredditInput onSubmit={this.props.onSubredditAdd} />
      </ul>
    )
  }

}
