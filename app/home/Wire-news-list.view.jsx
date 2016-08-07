import React from 'react';
import { map as _map } from 'lodash';
import WireNewsItem from '../components/WireNews.item.view.jsx';

class NewsList extends React.Component {

	render() {
		let newsItems = null;

	    if ( this.props.collection.length > 0 ) {
	    	newsItems = _map( this.props.collection, ( model, i ) => {
		        return ( <WireNewsItem
		          key={ i }
		          model={ model }/> );
	      	} );
	    }
	    
		return (
			<div className="news-feed">
				<div className="section-label">	
					<h3>Wire</h3> <a href="#" className="view-all-link">View All News</a>
				</div>
				<div className="feed">
					{ newsItems }
				</div>
			</div>
		);
	}
}

export default NewsList;