import {combineReducers} from 'redux';

function posts(posts = {}, action) {

  switch(action.type) {

    case 'RECEIVE_POSTS':
      return {...posts, [action.subreddit]: action.posts}

  }

  return posts;

}

export default combineReducers({posts});
