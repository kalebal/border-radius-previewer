import Route from '@ember/routing/route';

export default class CircleExamplesRoute extends Route {
  model() {
    return ['0 10px', '50px'];
  }
}
