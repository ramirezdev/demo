import React from 'react';
import moment from 'moment';

class WireNewsItemView extends React.Component {

	constructor( props ){
        super(props);
    }

	render() {
		const model = this.props.model
		const date = moment( model.date ).format( 'MM/DD/YYYY' );
		return (
			<div className="wire-news-item-wrapper">
				<h3 className="title">{ model.title }</h3>
				<span className="date">{ date }</span>
				<a className="news-link" href={ '/news/' + model.id }>Read More</a>
			</div>
		);
	}
}

export default WireNewsItemView;