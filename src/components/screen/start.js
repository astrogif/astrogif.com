import { h, Component } from 'preact';
import { AstroGif as Logo } from '../logos';
import style from './style';

export default class Start extends Component {
	render() {
		return <Logo dimensions={90} className={style.icon} />;
	}
}
