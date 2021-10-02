import Component from '@lib/Component';
import Route from '@lib/Route';
import RouteMap from '@src/RouteMap';

export default class App extends Component {
  constructor($target) {
    super($target);
    Route.init($target, RouteMap);
  }

  afterRender() {
    Route.route();
  }
}