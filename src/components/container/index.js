import { h, Component } from 'preact';
import { Link } from 'preact-router';
import cn from 'classnames';
import style from './style';

export default class Container extends Component {
	render({ children, className, fullHeight, type }) {
		const classes = cn(
			className,{
				[style.fullHeight]: fullHeight
			},
			style.container,
			style[type]
		);

		return (
			<div className={classes}>
				<div className={style.inner}>
					{children}
				</div>
			</div>
		);
	}
}

Container.defaultProps = {
	type: 'primary',
	fullHeight: false
};
