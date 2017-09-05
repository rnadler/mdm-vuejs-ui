import Vue from 'vue'

let Hello = Vue.extend({
  name: 'hello',
  data() {
    return {
      msg: 'Data Driven VueJs Dynamic Content Demo'
    }
  },
  render(h) {
    return (
      <div className="hello">
        <h1>{this.msg}</h1>
      </div>
    )
  }
});

export default Hello
