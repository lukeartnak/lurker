import React from 'react';
import ReactDOM from 'react-dom';

import SubredditList from 'containers/subreddit-list';
import PostList from 'containers/post-list';

class Application extends React.Component {

  constructor() {
    super();

    this.state = {subreddits: ['all', 'pics', 'gifs', 'tifu'], posts: []};
    this.handleSubredditSelect = this.handleSubredditSelect.bind(this);
    this.handleSubredditAdd = this.handleSubredditAdd.bind(this);
  }

  render() {
    return (
      <div className="lurker">
        <SubredditList
          subreddits={this.state.subreddits}
          onSubredditSelect={this.handleSubredditSelect}
          onSubredditAdd={this.handleSubredditAdd}
          />
        <PostList posts={this.state.posts} />
      </div>
    )
  }

  handleSubredditSelect(subreddit) {
    fetch('https://www.reddit.com/r/'+subreddit+'.json')
      .then(response => response.status == 200 ? response.json() : [])
      .then(data => this.setState({posts: data.data.children}));
  }

  handleSubredditAdd(subreddit) {
    this.setState({subreddits: [...this.state.subreddits, subreddit]});
  }

}

ReactDOM.render(<Application />, document.querySelector('.app'));
