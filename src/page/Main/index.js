import Component from '@lib/Component';
import Route from '@lib/Route';
import CardView from '@src/CardView';

export default class Main extends Component {
  template() {
    return `
      <div class="Main">
        <button class="aboutBtn" type="button">About</button>
        <div class="CardViewContainer"></div>
      </div>
    `;
  }

  afterRender() {
    const cardView = new CardView(this.$('.CardViewContainer'), { title: 'Foods' });
    cardView.render();

    this.$('.aboutBtn').addEventListener('click', () => {
      Route.go('/about');
    });
  }
}