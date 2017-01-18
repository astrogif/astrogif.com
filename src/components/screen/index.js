import { h, Component } from 'preact';
import cn from 'classnames';
import Blinker from './blinker';
import Fetching from './fetching';
import PlaceHolder from './placeholder';
import Start from './start';
import Text from './text';
import { MagnifyingGlass } from '../icons';
import style from './style';

const animationSteps = [
	{
		wait: 3000,
		cmp: Start
	},
	{
		wait: 1000,
		text: 'cat',
		cmp: Fetching
	},
	{
		wait: 4000,
		text: 'cat',
		gif: './assets/images/cat.gif'
	},
	{
		wait: 1500,
		cmp: Start
	},
	{
		text: 'smile',
		wait: 1400,
		cmp: Fetching
	},
	{
		text: 'smile',
		wait: 4000,
		gif: './assets/images/smile.gif'
	},
	{
		wait: 1500,
		cmp: Start
	},
	{
		text: 'donkey',
		wait: 1600,
		cmp: Fetching
	},
	{
		text: 'donkey',
		wait: 4000,
		gif: './assets/images/donkey.gif'
	}
];

export default class Screen extends Component {
	state = {
		idx: 0
	};

	componentDidMount() {
		const currentStep = animationSteps[this.state.idx];
		setTimeout(() => { this.nextStep(); }, currentStep.wait);
	}

	nextStep() {
		const idx = this.state.idx;
		const nextIdx = idx === animationSteps.length -1 ? 0 : idx + 1;

		this.setState({
			idx: nextIdx
		});

		setTimeout(() => { this.nextStep(); }, animationSteps[nextIdx].wait);
	}

	render({}, { idx }) {
		const currentStep = animationSteps[idx];
		const Cmp = currentStep.cmp;
		return (<div className={style.container}>
			<div className={style.screen}>
				<div className={style.input}>
					<MagnifyingGlass dimensions={25} className={style.mag} />
					{ currentStep.text
						? <Text text={currentStep.text} />
						: <PlaceHolder /> }
				</div>
				{currentStep.gif
					? <img src={currentStep.gif} className={style.gif} />
					: <Cmp />}
			</div>
		</div>);
	}
}
