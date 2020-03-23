<template>
  <form @submit.prevent="add">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select v-model="countryId" class="form-control" id="exampleFormControlSelect1">
        <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="report">Cases Amount</label>
      <input v-model="report" type="number" class="form-control" id="report">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import countriesOption from './../../country'
export default {
  data () {
    return {
      countries: [],
      countryId: null,
      report: null
    }
  },
  created () {
    this.countries = countriesOption
  },
  methods: {
    add () {
      const payload = {
        CountryId: this.countryId,
        report: this.report
      }
      console.log(payload)
      this.$store.dispatch('addReport', payload)
    }
  }
}
</script>

<style>

</style>
