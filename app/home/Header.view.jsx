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
				<Nav 
					collection={ this.props.menuItems } 
					tweets={ this.props.tweets }/>
				<Slideshow 
					collection={ this.props.slides }/>
			</header>
		);
	}
}

export default HeaderView;