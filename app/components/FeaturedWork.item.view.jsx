import React from 'react';

class FeaturedWorkItemView extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		const model = this.props.model;
		return (
			<div className="featured-work-item">
				<img className="icon" src={ model.icon }/>
				<span className="client-name">{ model.client }</span> <span className="project-title">{ model.title }</span>
				<p className="project-desc">{ model.client }</p>
				<a href={ "featured-work/" + model.id } className="project-link">View Project</a>
			</div>
		);
	}
}

export default FeaturedWorkItemView;