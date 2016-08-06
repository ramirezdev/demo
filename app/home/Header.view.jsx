import React from 'react';
import Nav from '../components/Nav.jsx';
import Slideshow from '../components/Slideshow.jsx';

class HeaderView extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		return (
			<header>
				<Nav/>
				<Slideshow/>
			</header>
		);
	}
}

export default HeaderView;