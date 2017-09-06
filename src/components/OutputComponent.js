import Vue from 'vue'

let OutputComponent = Vue.extend({
  props: ['context', 'path'],
  name: 'OutputComponent',
  data: () => ({
    value: 0 // Lookup ref value in Model.
  }),
  render() {
    return  <div><strong>{this.context.label}</strong><br/>{this.value}</div>
  }
});

export default OutputComponent;
