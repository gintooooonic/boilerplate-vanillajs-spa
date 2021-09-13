import DOM from './DOM';

export default class Component {
	targetEl = null;
	props = {};
	state = {};

	constructor(targetEl, props) {
		this.targetEl = targetEl;
		this.props = { ...props };
	}
	html() { return '' }
	afterRender() {}

	setEvent(eventType, selector, callback) {
		const el = this.targetEl.querySelector(selector);
		el.removeEventListener(eventType, callback);
		el.addEventListener(eventType, callback);
	}

	setState(state) {
		this.state = { ...this.state, ...state };
		DOM.render(this);
	}
}