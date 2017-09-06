import Vue from 'vue'
import DynamicComponent from "../DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";

let TableComponent = Vue.extend({
  mixins: [ContainerBaseComponent],
  props: ['context', 'path'],
  name: 'TableComponent',
  components: {
    DynamicComponent
  },
  render(h) {
    if (this.context === undefined) {
      return null;
    }
    this.update();
    return <div>
      <h3>{this.context.label}</h3>
      {this.elements.map(function (element) {
        return <DynamicComponent context={element.context} path={element.path} />
      })}
    </div>
  }
});

export default TableComponent;
