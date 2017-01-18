import { h, Component } from 'preact';
import { version } from '../../../package.json';
import style from './style';

export default class Downloads extends Component {
	render() {
		return <p className={style.current}>Current version - v{version}</p>;
	}
}
