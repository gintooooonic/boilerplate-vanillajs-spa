import './index.scss';

const quotes = [
	{
		msg: 'The only way to learn a new programming language is by writing programs in it.',
		by: 'Dennis Ritchie'
	},
	{
		msg: 'Programming isn\'t about what you know; it\'s about what you can figure out.',
		by: 'Chris Pine'
	},
	{
		msg: 'Sometimes it\'s better to leave something alone, to pause, and that\'s very true of programming.',
		by: 'Joyce Wheeler'
	},
	{
		msg: 'Testing leads to failure, and failure leads to understanding.',
		by: 'Burt Rutan'
	},
	{
		msg: 'The best error message is the one that never shows up.',
		by: 'Thomas Fuchs'
	},
];

const onAddBtnClicked = (evt) => {
	const randIdx = Math.floor(quotes.length * Math.random());
	const quote = quotes[randIdx];

	const newNode = document.createElement('div');
	newNode.classList.add('card', 'quote');
	newNode.innerHTML = `
		<p class="quote_msg">“${quote.msg}”</p>
		<p class="quote_by">${quote.by}</p>
	`;

	const refNode = evt.target;
	const parNode = evt.target.parentNode;
	parNode.insertBefore(newNode, refNode);
};

window.onload = () => {
	const adders = document.querySelectorAll('.adder');
	adders.forEach(e => {
		e.addEventListener('click', onAddBtnClicked);
	});
}