<template>
<div class="d-flex justify-content-center flex-wrap flex-row">
  <div v-for="report in reports" :key="report.id"  class="d-flex justify-content-center flex-row flex-wrap">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ report.Country.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Report Cases: {{ report.report }}</h6>
        <button @click="deleteReport(report.id)" >Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('fetchReports')
  },
  computed: {
    reports () {
      return this.$store.state.reports
    }
  },
  methods: {
    deleteReport (id) {
      const payload = {
        id
      }
      this.$store.dispatch('deleteReport', payload)
    }
  }
}
</script>

<style>

</style>
