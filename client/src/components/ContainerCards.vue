<template>
<div class="d-flex justify-content-center flex-row flex-wrap">
  <div v-for="country in newCountries" :key="country.id" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ country.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">COVID-19</h6>
      <div class="card-text d-flex justify-content-between">
        <p>Cases: {{ country.cases }}</p>
        <p>Deaths: {{ country.deaths }}</p>
        <p>Recovered: {{ country.recovered }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    countries () {
      return this.$store.state.countries
    },
    newCountries () {
      return this.$store.state.newCountries
    }
  }
}
</script>

<style>

</style>
