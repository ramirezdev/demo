import React from 'react';

class TweetBox extends React.Component {

	constructor( props ){
        super(props);
        this.state = { tweetVal: 'Tweet Tweet' };
        this.updateTweetText = this.updateTweetText.bind( this );
        this.submitTweet = this.submitTweet.bind( this );
    }

    updateTweetText( e ) {

    	if ( e.target.value === '' ) {
    		this.setState({
    			tweetVal: 'Tweet Tweet'
    		});
    	} else {
    		this.setState({
    			tweetVal: e.target.value
    		});
    	}
    	
    }

    submitTweet( e ) {
    	e.preventDefault();
    	const tweet = encodeURIComponent( this.state.tweetVal );
    	window.open( 'https://twitter.com/home?status=' + tweet );
    }

	render() {
		return (
			<div className="tweet-box">
				<div className="inner-holder">
					<span className="tweet-logo"></span> 
					<input 
						type="text"
						value={ this.state.tweetVal }
            			maxLength="140"
            			onChange={ this.updateTweetText }/> 
					<a href="#" onClick={ this.submitTweet }>Tweet</a> 
				</div>
			</div>
		);
	}
}

export default TweetBox;