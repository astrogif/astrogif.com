import { h, Component } from 'preact';
import cn from 'classnames';
import Button from '../button';
import * as Logos from '../logos';
import style from './style';

export default class Download extends Component {
	render({ os }) {

		console.log(Logos);
		const classes = cn(style.download, 'text-center');
		const Icon = Logos[os.display];

		return (<div class={classes}>
			<Icon className={style.icon} dimension={70} />
			<h4>AstroGif for {os.display}</h4>
			<Button disabled={os.comingSoon} href={os.url} type="alt" className={style.button}>
				Download
			</Button>
		</div>);
	}
}

