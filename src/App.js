import Component from "@lib/Component";

export default class App extends Component {
	constructor(targetEl) {
		super(targetEl);
		this.state = { items: ['item1', 'item2'] };
	}

	html() {
		const { items } = this.state;
		return `
			<ul>
				${items.map(item => `<li>${item}</li>`).join('')}
			</ul>
			<button>추가</button>
		`;
	}

	addItem = () => {
		const { items } = this.state;
		this.setState({ items: [ ...items, `item${items.length + 1}`] });
	}

	afterRender() {
		this.setEvent('click', 'button', this.addItem);
	}
}