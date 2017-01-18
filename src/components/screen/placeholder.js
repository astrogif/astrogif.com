import { h, Component } from 'preact';
import Blinker from './blinker';
import style from './style';

export default class PlaceHolder extends Component {
	render() {
		return (<div>
			<Blinker />
			<span className={style.placeholder}>what are you looking for?</span>
		</div>);
	}
}
