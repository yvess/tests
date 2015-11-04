import {Component, View} from 'ng-forward';
import AppFooter from './components/AppFooter.js';

@Component({
  selector: 'app',
  bindings: ["ui.router"]
})
@View({
  directives: [AppFooter],
  template: `
<section class="app">
  <p>some tests</p>
  <appfooter></appfooter>
</section>
`
})
export default class App {
  constructor() {
  }
}
