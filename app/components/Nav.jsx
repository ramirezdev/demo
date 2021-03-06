import React from 'react';
import { map as _map } from 'lodash';
import TweetBox from './tweetBox.jsx';

class Nav extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {

		let menuItems = null;

	    if ( this.props.collection.length > 0 ) {

	    	menuItems = _map( this.props.collection, ( model, i ) => {
	        	return ( <li key={ i }><a href={ model.route }>{ model.displayName }</a></li> );
	      	} );
	    }
		return (
			<div className="navigation-wrapper">
				<div className="holder">
					<div className="elements">
						<div className="centered">
							<h1 className="logo"></h1>
							<ul>
								{ menuItems }
							</ul>
							<TweetBox collection={ this.props.tweets }/>
							<a href="#" className="mobile-menu-icon"></a>
						</div>
					</div>
					
					
				</div>

			</div>
		);
	}
}

export default Nav;
