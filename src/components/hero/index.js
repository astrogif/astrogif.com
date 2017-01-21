import { h, Component } from 'preact';
import Button from '../button';
import Container from '../container';
import Sampler from '../sampler';
import CurrentVersion from '../currentVersion';
import downloads from '../../downloads.json';

function getDownloadDetails() {
	const currentPlatform = navigator.platform;
	for (let i = 0; i < downloads.length; i++) {
		const d = downloads[i];

		if (currentPlatform.toLowerCase().indexOf(d.platform.toLowerCase()) !== -1) {
			return d;
		}
	}
}

export default class Hero extends Component {
	render() {
		const download = getDownloadDetails();

		return (
			<Container type="primary" className="text-center" fullHeight>
				<Sampler />
				<h1>AstroGif</h1>
				<h2>A menubar app for finding the perfect gif</h2>
				<Button type="alt" href={download.url}>Download for {download.display}</Button>
				<CurrentVersion/>
			</Container>
		);
	}
}
