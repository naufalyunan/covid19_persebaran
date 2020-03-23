<template>
<div>
  <div id="search-container" class="d-flex justify-content-center align-items-center">
    <input type="text" placeholder="Search Country">
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
  components: {
    ContainerCards
  },
  created () {
    this.$store.dispatch('fetchCountries')
  }
}
</script>

<style>
#search-container{
  height: 15vh;
  width: 100vw;
}
</style>
