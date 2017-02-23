import React from 'react';

import './App.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import Home from '../../containers/Home';
import TweetBox from '../../components/TweetBox';
const App = () => (
	<Home>
		{tweets.map( (tweet, index) => (
			<Tweet 
				key={index}
				{...tweet}
			 />
		) )}
		<TweetBox />

	</Home>
);

export default App;
