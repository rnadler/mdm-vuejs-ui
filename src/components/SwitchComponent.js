import Vue from 'vue'

let SwitchComponent = Vue.extend({
  props: ['context', 'path'],
  name: 'SwitchComponent',
  data: () => ({
    isChecked: false // Lookup ref value in Model.
  }),
  methods: {
    handleCheckboxChange(event) {
      console.log(this.path + ' checkbox changed! ', event.target.checked);
      this.isChecked = event.target.checked;
    }
  },
  render(h) {
    return <div><input type='checkbox' onChange={this.handleCheckboxChange} checked={this.isChecked}/>
      <strong>{this.context.label}</strong></div>
  }
});

export default SwitchComponent;
