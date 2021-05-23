import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import CatList from './CatList';
import CatDetails from './CatDetails';

class Routes extends Component {
	render() {
		const getCat = (props) => {
			let name = props.match.params.name;
			let currentCat = this.props.cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
			return <CatDetails {...props} cat={currentCat} />;
		};
		return (
			<Switch>
				<Route exact path="/cats/:name" render={getCat} />;
				<Route exact path="/cats" render={() => <CatList cats={this.props.cats} />} />;
				<Redirect to="/cats" />
			</Switch>
		);
	}
}

export default Routes;
