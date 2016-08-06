import React from 'react';
import Data from '../data/config.js';
import HeaderView from './Header.view.jsx';
import FeaturedWorkList from './Featured-work-list.view.jsx';
import NewsList from './Wire-news-list.view.jsx';

class HomeView extends React.Component {

	render() {

		return (
			<div className="app-wrapper">
				
				<HeaderView menuItems={ Data.base.menuItems }/>
				
				<div className="content-holder">
					<h2>{ Data.base.tagLine }</h2>
					<div className="feed-items-wrapper">
						<FeaturedWorkList collection={ Data.featured }/>
						<NewsList collection={ Data.news }/>
					</div>
				</div>


			</div>
		);
	}
}

export default HomeView;
