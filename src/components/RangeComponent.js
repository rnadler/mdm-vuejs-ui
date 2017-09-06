import SelectBaseComponent from "./SelectBaseComponent";

let RangeComponent = SelectBaseComponent.extend({
  name: 'RangeComponent',
  data: () => ({
    value: 8,  // getValue(this.props.context.ref)
    items: []
  }),
  created() { // getValue(this.props.context.bind)
    let start = 4;
    let end = 20;
    let step = 0.5;
    this.items = [];
    for (let v = start; v <= end; v += step) {
      this.items.push(v)
    }
  }
});

export default RangeComponent;
