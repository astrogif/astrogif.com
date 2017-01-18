import { h, Component } from 'preact';
import Blinker from './blinker';
import style from './style';

export default class Text extends Component {
	letterInterval = 200;
	state = {
		len: 1
	};

	componentDidMount() {
		setTimeout(this.nextLetter.bind(this), this.letterInterval);
	}

	nextLetter() {
		const nextLetterLen = this.state.len + 1;
		this.setState({
			len: nextLetterLen
		});

		if (nextLetterLen < this.props.text.length) {
			setTimeout(this.nextLetter.bind(this), this.letterInterval);
		}
	}

	render({ text }, { len }) {
		const textSegment = text.substr(0, len);

		return (<div>
			<span className={style.searchText}>
				{textSegment}
				<Blinker className={style.textBlinker} alwaysOn={len !== text.length} />
			</span>
		</div>);
	}
}
