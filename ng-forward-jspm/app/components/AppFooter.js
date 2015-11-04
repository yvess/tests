import {Component, View} from 'ng-forward';

@Component({
  selector: 'appfooter'
})
@View({
  template:
    `
    <p>my app footer</p>
    `
})
export default class AppFooter {
  constructor() {
  }
}
