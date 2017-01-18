import { h, Component } from 'preact';
import Button from '../button';
import Container from '../container';
import Sampler from '../sampler';
import CurrentVersion from '../currentVersion';

export default class Hero extends Component {
	render() {
		return (
			<Container type="primary" className="text-center" fullHeight>
				<Sampler />
				<h1>AstroGif</h1>
				<h2>A menubar app for finding the perfect gif</h2>
				<Button type="alt" href="#">Download for Mac</Button>
				<CurrentVersion/>
			</Container>
		);
	}
}
