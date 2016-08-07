import React from 'react';
import getJSON from 'get-json';

class TweetListItem extends React.Component {

	//Todo make an actual twitter feed using the API.

	constructor( props ){
        super(props);
    }

	render() {
		const model = this.props.model;

		return (
			<div className="tweet">
				<div className="tweet-content" dangerouslySetInnerHTML={ { __html: model.content } }></div>
				<p className="modified">{ model.date }</p>
			</div>
		);
	}
}

export default TweetListItem;