import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ExampleBoxComponent extends Component {
  @tracked tr = 0;
  @tracked tl = 0;
  @tracked br = 0;
  @tracked bl = 0;
}
