import { h, Component } from 'preact';
import Container from '../container';
import Download from '../download';
import downloads from '../../downloads.json';
import style from './style';

export default class Downloads extends Component {
	render() {
		console.log(downloads);
		return (<Container type="tertiary">
				<h3 className="text-center">Download AstroGif</h3>
				<div className={style.downloads}>
					{downloads.map((d, idx) => <Download os={d} />)}
				</div>
			</Container>);
	}
}
