import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ExampleListComponent extends Component {
  @action
  showExample(example) {
    alert(`The example is ${example}`);
  }
}
