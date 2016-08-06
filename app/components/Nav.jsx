import React from 'react';
import TweetBox from './tweetBox.jsx';

class Nav extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		return (
			<div className="navigation-wrapper">
				<h1>Logo</h1>
				<ul>
					<li>menu item 1</li>
					<li>menu item 2</li>
					<li>menu item 3</li>
					<li>menu item 4</li>
					<li>menu item 5</li>
				</ul>
				<TweetBox/>

			</div>
		);
	}
}

export default Nav;
