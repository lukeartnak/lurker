import React from 'react';

const Subreddit = ({name, onSelect}) =>  (
  <li className="subreddit" onClick={onSelect}>
    {name.toUpperCase()}
  </li>
)

export default Subreddit;
