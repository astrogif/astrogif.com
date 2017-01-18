import { h, Component } from 'preact';
import Button from '../button';
import Container from '../container';
import Sampler from '../sampler';
import CurrentVersion from '../currentVersion';
import { version } from '../../../package.json';

const href = `https://github.com/astrogif/astrogif/releases/download/v${version}/AstroGif-${version}.dmg`;

export default class Hero extends Component {
	render() {
		return (
			<Container type="primary" className="text-center" fullHeight>
				<Sampler />
				<h1>AstroGif</h1>
				<h2>A menubar app for finding the perfect gif</h2>
				<Button type="alt" href={href}>Download for Mac</Button>
				<CurrentVersion/>
			</Container>
		);
	}
}
