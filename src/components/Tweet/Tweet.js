import React from 'react';

import './Tweet.css';

const Tweet = props => (
	<div className='tweet'>
		<div  className='avatar'>
			<img src={props.avatar} role='presentation' />
		</div>
		<div className='infos'>
			<strong>{props.username}</strong>
			<p>{props.content}</p>
		</div>
	</div>
);

export default Tweet;
