import React, { Component, Fragment } from 'react';
import { Loading, Modal, Toggle } from '../../Utilities';
import './style.css';

export default class Demo extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
	}

	render() {
		return (
			<div id="demo">

				<h1>Demos</h1>

				<p>To remove this content, simply remove the "Demo" component from Components/App/index.js.</p>

				<p>Alternatively, view Components/Demo/index.js for example markup.</p>

				<h2>Modal</h2>

				<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<button onClick={toggle}>Open Modal</button>
						<Modal on={on} toggle={toggle}>
							<h1>OMIGOD</h1>
						</Modal>
					</Fragment>
				)}
				</Toggle>

				<h2>Loading Spinners</h2>
				<p>Made by <a href="https://samherbert.net/svg-loaders/">Sam Herbert</a> for everyone.</p>
				<p>Usage:</p>
				<p><pre>&lt;Loading name="tail-spin" color="#000" size="48" /&gt;</pre></p>

				<ul id="loading-demos">
					<li style={{ background: '#1ABC9C' }} title="audio">
						<Loading name="audio" />
					</li>
					<li style={{ background: '#34495E' }} title="rings">
						<Loading name="rings" />
					</li>
					<li style={{ background: '#F39C12' }} title="grid">
						<Loading name="grid" />
					</li>
					<li style={{ background: '#9B59B6' }} title="hearts">
						<Loading name="hearts" />
					</li>
					<li style={{ background: '#3498DB' }} title="oval">
						<Loading name="oval" />
					</li>
					<li style={{ background: '#E74C3C' }} title="three-dots">
						<Loading name="three-dots" />
					</li>
					<li style={{ background: '#2ECC71' }} title="spinning-circles">
						<Loading name="spinning-circles" />
					</li>
					<li style={{ background: '#2C3E50' }} title="puff">
						<Loading name="puff" />
					</li>
					<li style={{ background: '#F1C40F' }} title="circles">
						<Loading name="circles" />
					</li>
					<li style={{ background: '#8E44AD' }} title="tail-spin">
						<Loading name="tail-spin" />
					</li>
					<li style={{ background: '#2980B9' }} title="bars">
						<Loading name="bars" />
					</li>
					<li style={{ background: '#E74C3C' }} title="ball-triangle">
						<Loading name="ball-triangle" />
					</li>
				</ul>

			</div>
		);
	}
}
