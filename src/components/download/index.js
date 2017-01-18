import { h, Component } from 'preact';
import cn from 'classnames';
import Button from '../button';
import { Linux, Mac, Windows } from '../logos';
import { version } from '../../../package.json';
import style from './style';

const osDeets = {
	linux: {
		display: 'Linux',
		comingSoon: true,
		ext: 'tgz',
		icon: Linux
	},
	mac: {
		display: 'Mac',
		comingSoon: false,
		ext: 'dmg',
		icon: Mac
	},
	windows: {
		display: 'Windows',
		comingSoon: true,
		ext: 'zip',
		icon: Windows
	}
};

export default class Download extends Component {
	render({ os }) {
		const currentOs = osDeets[os];
		const classes = cn(style.download, 'text-center');
		const Icon = currentOs.icon;
		const href = `https://github.com/astrogif/astrogif/releases/download/v${version}/AstroGif-${version}.${currentOs.ext}`


		return (<div class={classes}>
			<Icon className={style.icon} dimension={70} />
			<h4>AstroGif for {currentOs.display}</h4>
			<Button disabled={currentOs.comingSoon} href={href} type="alt" className={style.button}>
				{currentOs.comingSoon ? 'Coming soon' : 'Download'}
			</Button>
		</div>);
	}
}

