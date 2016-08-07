import React from 'react';
import { map as _map } from 'lodash';
import classNames from 'classnames';
import TweetListItem from './TweetListItem.view.jsx';

class TweetsListView extends React.Component {

	//Todo make an actual twitter feed using the API.

	constructor( props ){
        super(props);
    }

	render() {

		let tweets = null;

	    if ( this.props.collection.length > 0 ) {
	    	tweets = _map( this.props.collection, ( model, i ) => {
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