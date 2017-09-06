<template>
  <div>
    <div class="center">
      <h1>Data Driven VueJs Dynamic Content Demo</h1>
    </div>
    <TableComponent :context="controls" :path="path"></TableComponent>
  </div>
</template>

<script>
import TableComponent from './components/TableComponent'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    TableComponent
  },
  data: () => ({
    controls: undefined,
    path: undefined
  }),
  created() {
    axios.get(`/static/mini_model_ui_example.json`)
      .then(response => {
        this.controls = response.data.Controls;
      })
  }
}
</script>
