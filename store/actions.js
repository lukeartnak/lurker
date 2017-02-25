import axios from 'axios';
import moment from 'moment';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, posts) {
  return {
    type: RECEIVE_POSTS,
    subreddit, posts
  }
}

export function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(selectSubreddit(subreddit));
    dispatch(requestPosts(subreddit));
    return axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(json => json.data.data.children.map(formatPost))
      .then(posts => dispatch(receivePosts(subreddit, posts)))

  }
}

function formatPost({data}) {

  return {

    id: data.id,
    link: data.url,
    subreddit: data.subreddit,
    title: data.title,
    author: data.author,
    score: data.score,
    posted: moment.utc(data.created_utc).fromNow(),
    comments: data.num_comments

  }

}
