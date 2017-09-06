import Vue from 'vue'

let SelectBaseComponent = Vue.extend({
  props: ['context', 'path'],
  methods: {
    handleChange(event) {
      console.log(this.path + ' select base change value=' + event.target.value);
      this.value = event.target.value;
    }
  },
  render(h) {
    return <div><strong>{this.context.label}</strong><br/>
      <select value={this.value} onChange={this.handleChange}>
        {this.items.map(function (item) {
          return <option value={item}>{item}</option>
        })}
      </select>
    </div>
  }
});

export default SelectBaseComponent;
