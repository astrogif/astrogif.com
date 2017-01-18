import { h, Component } from 'preact';
import Container from '../container';
import style from './style';

export default class What extends Component {
	render() {
		return (<Container type="secondary">
			<h3 className="text-center">What is AstroGif?</h3>
			<p>AstroGif is a small app that sits in your menubar and lets you instantly search <a href="https://giphy.com">Giphy</a> for the right gif for the right moment. Simply type in the keyword you want a gif for, press enter, and the gif url is copied straight to your clipboard. And if you don't like the gif you've been shown then just press the down arrow to find another.</p>
			<p>With the abilty to copy either the URL or the appropriate Markdown syntax, AstroGif can help find the right reaction gif for use in tools like Slack or in developer focused tools like Github.</p>
			<p>Because, it's <a href="https://www.youtube.com/watch?v=KBzAOT_WZGo">just like Jimmy Fallon always says</a>, a gif is worth a thousand words.</p>
		</Container>);
	}
}
