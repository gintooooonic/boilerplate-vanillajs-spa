import DOM from './DOM';

export default class Component {
	targetEl = null;
	props = {};
	state = {};

	constructor(targetEl, props) {
		this.targetEl = targetEl;
		this.props = { ...props };
	}
	render() { return '' }
	setEvent() {}
	setState(state) {
		this.state = { ...this.state, ...state };
		DOM.render(this);
	}
}