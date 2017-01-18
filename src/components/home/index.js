import { h, Component } from 'preact';
import Hero from '../hero';
import What from '../what';
import Downloads from '../downloads';
import Footer from '../footer';
import Github from '../github';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Hero />
				<What />
				<Downloads />
				<Footer />
				<Github />
			</div>
		);
	}
}
