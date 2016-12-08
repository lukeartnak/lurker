import React from 'react';
import ReactDOM from 'react-dom';

import SubredditList from 'containers/subreddit-list';
import SubredditPrompt from 'components/subreddit-prompt';
import PostList from 'containers/post-list';

class Application extends React.Component {

  constructor() {
    super();

    this.state = {subreddits: ['all', 'pics', 'gifs', 'tifu'], posts: [], prompt: false};
    this.handleSubredditSelect = this.handleSubredditSelect.bind(this);
    this.handleSubredditPrompt = this.handleSubredditPrompt.bind(this);
    this.handleSubredditAdd = this.handleSubredditAdd.bind(this);
  }

  render() {
    return (
      <div className="lurker">
        <SubredditList
          subreddits={this.state.subreddits}
          onSubredditSelect={this.handleSubredditSelect}
          onSubredditPrompt={this.handleSubredditPrompt}
          />
        <PostList posts={this.state.posts} />
        <SubredditPrompt onSubmit={this.handleSubredditAdd} onClose={this.handleSubredditPrompt} show={this.state.prompt}/>
      </div>
    )
  }

  handleSubredditSelect(subreddit) {
    fetch('https://www.reddit.com/r/'+subreddit+'.json')
      .then(response => response.status == 200 ? response.json() : [])
      .then(data => this.setState({posts: data.data.children}));
  }

  handleSubredditPrompt() {
    this.setState({prompt: !this.state.prompt});
  }

  handleSubredditAdd(subreddit) {
    this.setState({subreddits: [...this.state.subreddits, subreddit]});
  }

}

ReactDOM.render(<Application />, document.querySelector('.app'));
