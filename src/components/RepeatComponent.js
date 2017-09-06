import Vue from 'vue'
import DynamicComponent from "../DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";

let RepeatComponent = Vue.extend({
  mixins: [ContainerBaseComponent],
  props: ['context', 'path'],
  name: 'RepeatComponent',
  components: {
    DynamicComponent
  },
  render(h) {
    if (this.context === undefined) {
      return null;
    }
    this.update();
    return <div class="panel panel-info">
      <div class="panel-heading">
        <h2 class="panel-title">{this.context.label}</h2>
      </div>
      <table class="table-condensed">
        <tbody>
        <tr>
          {this.elements.map(function (element) {
            return <td key={element.path}>
              <DynamicComponent context={element.context} path={element.path} />
            </td>
          })}
        </tr>
        </tbody>
      </table>
    </div>
  }
});

export default RepeatComponent;
