import React, { Component } from 'react';
import './CatList.css';
import { Link } from 'react-router-dom';

class CatList extends Component {
	render() {
		return (
			<div className="CatList">
				<h1 className="display-1 text-center">Cat List</h1>
				<div className="row">
					{this.props.cats.map((c) => (
						<div className="Cat col-lg-4 text-center" key={c.name}>
							<img src={c.src} alt={c.name} />
							<h3>
								<Link className="underline" to={`/cats/${c.name}`}>
									{c.name}
								</Link>
							</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default CatList;
