import React, {Component} from 'react';

import './TweetBox.css'

class TweetBox extends Component {
	
	state = {
		value: '',
	};


	handleChange = ({ target: {value} }) => {
		this.setState({ value });
	};

	render(){
	
		const { value } = this.state;

		return (
			<div className="tweetbox">
				<textarea 
					placeolder="Composer votre tweet"
					rows={3}
					value={value}
					onChange={this.handleChange}
				/>
				<div>
					{140 - value.length}{ ' caractère restant' }
				</div>
			</div>
		);
	}
};

export default TweetBox;
