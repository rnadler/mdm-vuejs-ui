import jp from 'jsonpath'

let ContainerBaseComponent = {
  methods: {
    update() {
      if (this.context === null) {
        return;
      }
      this.elements = [];
      let elements = jp.query(this.context, '$..controls')[0];
      for (let el in elements) {
        let context = elements[el];
        this.elements.push({context: context, path: this.getPath(el)});
      }
    },
    getPath(name) {
      if (this.path === undefined) {
        return name;
      }
      return this.path + '.' + name;
    }
  }
};

export default ContainerBaseComponent;
