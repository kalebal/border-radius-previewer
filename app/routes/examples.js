import Route from '@ember/routing/route';

export default class ExamplesRoute extends Route {
  model() {
    return ['0 10px', '50px', '6px', '5px 2px 10px 5px'];
  }
}
