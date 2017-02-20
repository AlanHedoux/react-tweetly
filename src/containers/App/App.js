import React from 'react';

import './App.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import Home from '../../containers/Home';

const App = () => (
	<Home>
		<Tweet 
		  avatar={tweets[1].avatar}
		  username={tweets[1].username}
		  content={tweets[1].content}
		/>
		<Tweet 
		  avatar={tweets[0].avatar}
		  username={tweets[0].username}
		  content={tweets[0].content}
		/>
	</Home>
);

export default App;
