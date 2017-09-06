import Vue from 'vue'

let DefaultComponent = Vue.extend({
  props: ['context', 'path'],
  name: 'DefaultComponent',
  template: '<div>{{ context.ui }}: {{ context.label }}</div>'
});

export default DefaultComponent;
