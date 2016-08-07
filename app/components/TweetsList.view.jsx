import React from 'react';
import { map as _map } from 'lodash';
import classNames from 'classnames';
import TweetListItem from './TweetListItem.view.jsx';

class TweetsListView extends React.Component {

	//Todo make an actual twitter feed using the API.

	constructor( props ){
        super(props);
        this.state = { collection: [
        	{
        		content: 'Can’t wait for the launch of the Envoy Website. <a href="http://instagr.am/p/N8d7E/">instagr.am/p/N8d7E/</a> Check our latest work.',
        		date: 'about an hour ago via twitter'
        	},
        	{
        		content: 'ooVoo tabs Envoy as new digital agency.',
        		date: 'about an hour ago via twitter'
        	},
        	{
        		content: 'Check out our latest work for <a href="http://twitter.com/promax">@promax</a>',
        		date: 'about an hour ago via twitter'
        	},
        	{
        		content: 'Sneak peek our new office. <a href="http://but.ly/zH3UnD">but.ly/zH3UnD</a> Drop in on us.',
        		date: 'about an hour ago via twitter'
        	},

        	] };
    }

	render() {

		let tweets = null;

	    if ( this.state.collection.length > 0 ) {
	    	tweets = _map( this.state.collection, ( model, i ) => {
		        return ( <TweetListItem
		          key={ i }
		          model={ model }/> );
	      	} );
	    }

	    let listClass = classNames('tweets-list', {
	    	'enabled': this.props.enabled
	    });

		return (
			<div className={ listClass }>
				<div className="wrapper">
					{ tweets }
				</div>
			</div>
		);
	}
}

export default TweetsListView;