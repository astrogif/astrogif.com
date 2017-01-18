import { h, Component } from 'preact';
import cn from 'classnames';
import Container from '../container';
import style from './style';

export default class Footer extends Component {
	render() {
		const classes = cn(
			style.text,
			'text-center'
		);

		return (<Container type="secondary">
				<p className={classes}>Built with ❤️ by <a href="https://github.com/jamesmacfie">James Macfie</a>. This source for this site is also <a href="https://github.com/astrogif/astrogif.github.io">on Github</a>.</p>
			</Container>);
	}
}
