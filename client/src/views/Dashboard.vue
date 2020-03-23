<template>
<div>
  <div id="search-container" class="d-flex justify-content-center align-items-center">
    <input v-model="filter" type="text" placeholder="Search Country">
  </div>
  <hr>
  <div>
    <container-cards/>
  </div>
</div>
</template>

<script>
import ContainerCards from './../components/ContainerCards'
export default {
  data () {
    return {
      filter: ''
    }
  },
  components: {
    ContainerCards
  },
  created () {
    this.$store.dispatch('fetchCountries')
  },
  computed: {
    countries () {
      return this.$store.state.countries
    }
  },
  watch: {
    filter (val, oldVal) {
      val = val.toLowerCase()
      this.countries.forEach(el => {
        el.name = el.name.toLowerCase()
      })
      // console.log(this.countries[0])
      const newCountries = this.countries.filter(el => {
        if (el.name.includes(val)) {
          return el.name
        }
      })
      newCountries.forEach(el => {
        const nameArr = el.name.split('')
        const firstWord = nameArr[0].toUpperCase()
        nameArr[0] = firstWord
        el.name = nameArr.join('')
      })
      this.$store.commit('SET_NEWCOUNTRIES', newCountries)
      console.log(newCountries)
    }
  }
}
</script>

<style>
#search-container{
  height: 15vh;
  width: 100vw;
}
</style>
