export default class Component {
  $target = null;
  props = {};
  state = {};

  constructor($target, props) {
    this.$target = $target;
    this.props = { ...props };
  }

  render() {
    this.beforeRender();
    this.$target.innerHTML = this.template();
    this.afterRender();
  }

  setState(state) {
    this.state = { ...this.state, ...state };
    this.render();
  }

  $(selector) {
    return this.$target.querySelector(selector);
  }
  
  $All(selector) {
    return this.$target.querySelectorAll(selector);
  }
  
  template() { return ''; }
  beforeRender() {}
  afterRender() {}
}