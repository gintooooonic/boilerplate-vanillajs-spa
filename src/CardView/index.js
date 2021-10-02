import Component from '@lib/Component';
import style from './index.module.scss';

export default class CardView extends Component {
  constructor($target, props) {
    super($target, props);
    this.state = {
      images: []
    };
    this.addCard = this.addCard.bind(this);
  }

  template() {
    return `
    <div>
    <h1 class="${style.title}">${this.props.title}</h1>
    <ul class="${style.cards}">
    ${this.state.images.reduce((sum, img) => sum + Card(img), '')}
    <li class="${style.card} ${style.btn} addBtn clickable">Add!</li>
    </ul>
    </div>
    `;
  }

  addCard() {
    fetch('https://foodish-api.herokuapp.com/api')
      .then(res => res.json())
      .then(data => this.setState({images: [...this.state.images, data.image]}));
  }
  
  afterRender() {
    this.$('.addBtn').addEventListener('click', this.addCard);
  }
}

function Card(img) {
  return `
    <li class="${style.card}">
      <img src=${img} alt="img" width="300">
    </li>
  `;
}