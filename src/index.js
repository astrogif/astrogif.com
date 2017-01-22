import { h, render } from 'preact';
import Sampler from './components/sampler';
import './style';

function init() {
	render(<Sampler />, document.getElementById('root'));
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/sampler', () => requestAnimationFrame(init) );
}

init();
