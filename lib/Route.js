class Router {
  init($target, RouteMap) {
    this.$target = $target;
    this.RouteMap = RouteMap;
    window.onpopstate = () => {
      this.route();
    };
  }

  route() {
    const path = location.pathname;
    const Page = this.RouteMap[path];
    new Page(this.$target).render();
  }

  go(path) {
    history.pushState({}, '', path);
    this.route();
  }

  back() {
    history.back();
  }
}

const Route = new Router();
export default Route;