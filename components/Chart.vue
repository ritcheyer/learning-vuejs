<script>
  import { Line, mixins } from 'vue-chartjs'

  export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local optoins object
      this.renderChart(this.chartData, this.options)
    }
  }
</script>

<style>
</style>
