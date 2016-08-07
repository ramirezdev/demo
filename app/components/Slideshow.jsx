import React from 'react';
import Slider from 'react-slick';
import { map as _map } from 'lodash';

class Slideshow extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		let siderItems = null;

	    if ( this.props.collection.length > 0 ) {

	    	siderItems = _map( this.props.collection, ( model, i ) => {
	        	return ( <div key={ i }>
	        				<a href={ "projects/" + model.id }>
	        					<div className="project-info">
	        						<h3 dangerouslySetInnerHTML={ { __html: model.title } }></h3>
	        						<p dangerouslySetInnerHTML={ { __html: model.desc } }></p>
	        					</div>
	        					<img src={ model.slideImg }/>
        					</a>
        				 </div> );
	      	} );
	    }

	    const settings = {
	      dots: true,
	      infinite: true,
	      speed: 750,
	      slidesToShow: 1,
	      slidesToScroll: 1
    	};
		return (
			<div className="slideshow-wrapper">
				
			</div>
		);
	}
}

export default Slideshow;