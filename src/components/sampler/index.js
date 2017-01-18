import { h, Component } from 'preact';
import Screen from '../screen';
import style from './style';

export default class Sampler extends Component {
	render() {
		return (<div className={style.sampler}>
			<Screen />
			<img class={style.icon} src="./assets/images/icon256.png" />
		</div>);
	}
}
