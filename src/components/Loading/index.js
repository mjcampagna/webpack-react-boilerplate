import React, { Component, Fragment } from 'react';
import './loading.css';

const Loading = props => {
	return (
		<div id="loading-spinner">
			<div style={{ 
				backgroundColor: props.color,
				backgroundImage: `url(
					${require('./svg-loaders/'+ props.spinner + '.svg')}
				)`,
				borderColor: props.color
			}}>
			</div>
		</div>
	);
}
export default Loading;
