import Component from '@lib/Component';
import Route from '@lib/Route';

export default class About extends Component {
  template() {
    return `
      <div class="About">
        <button class="backBtn" type="button">Back</button>
        <h1>About</h1>
        <p>Hello!</p>
      </div>
    `;
  }

  afterRender() {
    this.$('.backBtn').addEventListener('click', () => {
      Route.back();
    });
  }
}