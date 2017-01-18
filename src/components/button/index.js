import { h, Component } from 'preact';
import cn from 'classnames';
import style from './style';

export default class Button extends Component {
	render({ children, className, disabled, type, href }) {
		const classes = cn(
			style.button,
			style[type],
			className,
			{
				[style.disabled]: disabled
			}
		);

		if (disabled) {
			return <span href={href} className={classes}>{children}</span>;
		}

		return <a href={href} className={classes}>{children}</a>;
	}
}

