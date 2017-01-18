import { h, Component } from 'preact';
import cn from 'classnames';
import style from './style';

export default class Blinker extends Component {
	blinkerInterval = 600;
	state = {
		on: true
	};

	changeOnState() {
		this.setState({
			on: !this.state.on
		});
	}

	componentDidMount() {
		this.intervalId = window.setInterval(this.changeOnState.bind(this), this.blinkerInterval);
	}

	componentDidUnmount() {
		window.clearInterval(this.intervalId);
	}

	render({ className, alwaysOn }, { on }) {
		const classes = cn(
			className,
			{
				[style.blinker] : alwaysOn || on
			}
		);

		return <span className={classes} />;
	}
}
