import Component from '@lib/Component';
import CardView from './CardView';

export default class App extends Component {
  template() {
    return `
      <div class="App"></div>
    `;
  }

  afterRender() {
    const cardView = new CardView(this.$('.App'), { title: 'Foods' });
    cardView.render();
  }
}