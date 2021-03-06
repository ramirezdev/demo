import React from 'react';

class FeaturedWorkItemView extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		const model = this.props.model;
		return (
			<article className="featured-work-item">
				<img className="icon" src={ model.icon }/>
				<span className="client-name">{ model.client }</span> <span className="project-title">{ model.title }</span>
				<p className="project-desc">{ model.desc }</p>
				<a href={ "featured-work/" + model.id } className="project-link">View Project</a>
			</article>
		);
	}
}

export default FeaturedWorkItemView;