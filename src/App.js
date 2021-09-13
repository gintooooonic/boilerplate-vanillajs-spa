import Component from "@lib/Component";

export default class App extends Component {
	constructor(targetEl) {
		super(targetEl);
		this.state = { items: ['item1', 'item2'] };
	}

	render() {
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

	setEvent() {
		const addButton = this.targetEl.querySelector('button');
		addButton.removeEventListener('click', this.addItem);
		addButton.addEventListener('click', this.addItem);
	}
}