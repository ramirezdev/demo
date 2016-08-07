import React from 'react';
import { map as _map } from 'lodash';
import FeaturedWorkItem from '../components/FeaturedWork.item.view.jsx';

class FeaturedWorkList extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		let featuredItems = null;

	    if ( this.props.collection.length > 0 ) {

	    	featuredItems = _map( this.props.collection, ( model, i ) => {
	        return ( <FeaturedWorkItem
	          key={ i }
	          model={ model }/> );
	      	} );
	    }
		return (
			<section className="featured-work-feed">
				<div className="section-label">	
					<h3>Featured Work</h3> <a href="#" className="view-all-link">View All Work</a>
				</div>
				<div className="feed">
					{ featuredItems }
				</div>
			</section>
		);
	}
}

export default FeaturedWorkList;