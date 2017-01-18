import { h, Component } from 'preact';
import { Loading } from '../icons';
import style from './style';

export default class Fetching extends Component {
	render() {
		return <Loading dimensions={90} className={style.icon} />;
	}
}
