import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import CatList from './CatList';
import CatDetails from './CatDetails';
import Navbar from './Navbar';

class App extends Component {
	static defaultProps = {
		cats: [
			{
				name: 'Whiskers',
				age: 5,
				src:
					'https://images.unsplash.com/photo-1572360620839-a02312482daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80',
				facts: [
					'Whiskers loves eating popcorn.',
					'Whiskers is a sweet cat.',
					'Whiskers wants to cuddle with you!'
				]
			},
			{
				name: 'Hazel',
				age: 3,
				src: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg',
				facts: [ 'Hazel has soooo much energy!', 'Hazel is highly intelligent.', 'Hazel loves people.' ]
			},
			{
				name: 'Tubby',
				age: 6,
				src:
					'https://www.inquirer.com/resizer/33-eBuWFn_ZnRwxriP-n2OdOLgw=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/J4QDHA4WPZHJJJKAUWMI6HGL6A.jpg',
				facts: [ 'Tubby is not the brightest cat', 'Tubby does not like exercise.', 'Tubby loves eating food.' ]
			}
		]
	};
	render() {
		const getCat = (props) => {
			let name = props.match.params.name;
			let currentCat = this.props.cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
			return <CatDetails {...props} cat={currentCat} />;
		};
		return (
			<div>
				<Navbar cats={this.props.cats} />
				<Switch>
					<Route exact path="/cats/:name" render={getCat} />;
					<Route exact path="/cats" render={() => <CatList cats={this.props.cats} />} />;
				</Switch>
			</div>
		);
	}
}

export default App;
