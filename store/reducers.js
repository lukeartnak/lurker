import {combineReducers} from 'redux';

import {SELECT_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from './actions';

function selectedSubreddit(state = 'all', action) {

  switch (action.type) {

    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state

  }

}

function subreddits(state = {}, action) {

  switch (action.type) {

    case REQUEST_POSTS:
      return {...state, [action.subreddit]: {fetching: true, posts: []}}
    case RECEIVE_POSTS:
      return {...state, [action.subreddit]: {fetching: false, posts: action.posts}}

    default:
      return state

  }

}

export default combineReducers({subreddits, selectedSubreddit});
