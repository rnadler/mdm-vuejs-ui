import SelectBaseComponent from "./SelectBaseComponent";

let SelectComponent = SelectBaseComponent.extend({
  name: 'SelectComponent',
  data: () => ({
    value: 'CPAP',  // getValue(this.props.context.ref)
    items: [
      'CPAP', 'AutoSet', 'HerAuto' // getValue(this.props.context.bind)
      ]
  })
});

export default SelectComponent;
