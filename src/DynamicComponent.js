import Vue from 'vue'
import OutputComponent from './components/OutputComponent'
import DefaultComponent from "./components/DefaultComponent";
import TableComponent from './components/TableComponent';
import RepeatComponent from "./components/RepeatComponent";
import SwitchComponent from "./components/SwitchComponent";
import RangeComponent from "./components/RangeComponent";
import SelectComponent from "./components/SelectComponent";


let DynamicComponent = Vue.extend({
  props: ['context', 'path'],
  data() {
    return {
      component: this.getComponent(this.context.ui)
    }
  },
  methods: {
    getComponent(ui) {
      switch (ui) {
        case 'output':
          return OutputComponent;
        case 'table':
          return TableComponent;
        case 'repeat':
          return RepeatComponent;
        case 'switch':
          return SwitchComponent;
        case 'range':
          return RangeComponent;
        case 'select':
          return SelectComponent;
        default:
          return DefaultComponent;
      }
    }
  },
  render(h) {
    return  <this.component context={this.context} path={this.path}/>
  }
});

export default DynamicComponent;
