<template>
<div>
  <div class="d-flex justify-content-center align-items-center">
    <form-add/>
  </div>
  <hr>
  <div>
    <report-cards/>
  </div>
</div>
</template>

<script>
import FormAdd from './../components/FormAdd.vue'
import ReportCards from './../components/ReportCards.vue'
export default {
  components: {
    FormAdd,
    ReportCards
  }
}
</script>

<style>

</style>
