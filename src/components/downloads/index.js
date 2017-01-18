import { h, Component } from 'preact';
import Container from '../container';
import Download from '../download';
import style from './style';

export default class Downloads extends Component {
	render() {
		return (<Container type="tertiary">
				<h3 className="text-center">Download AstroGif</h3>
				<div className={style.downloads}>
					<Download os="windows" />
					<Download os="mac" />
					<Download os="linux" />
				</div>
			</Container>);
	}
}
