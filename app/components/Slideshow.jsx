import React from 'react';
import ImageGallery from 'react-image-gallery';
import { map as _map } from 'lodash';

class Slideshow extends React.Component {

	constructor( props ){
        super(props);
    }
 
	render() {
		let sliderItems = [];

	    if ( this.props.collection.length > 0 ) {

	    	sliderItems = _map( this.props.collection, ( model, i ) => {
	    		console.log('model.slideImg ', model.slideImg);
	    		const obj = {
	    			original: model.slideImg
	    		};
	    		sliderItems.push( obj );
	        	
	      	} );
	    }


    	const images = [
	      {
	        original: 'img/slides/slide1.jpg'
	      },
	      {
	        original: 'img/slides/slide2.jpg'
	      },
	      {
	        original: 'img/slides/slide3.jpg'
	      }
	    ];

		return (
			<div className="slideshow-wrapper">
				<ImageGallery
		          ref={i => this._imageGallery = i}
		          items={ images }
		          autoPlay={ true }
		          slideInterval={ 3000 }
		          showNav={ true }/>
			</div>
		);
	}
}

export default Slideshow;