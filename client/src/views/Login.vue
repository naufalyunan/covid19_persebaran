<template>
<div id="login-container" class="d-flex justify-content-center align-items-center flex-column">
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="username">Username</label>
      <input v-model="username" type="text" class="form-control" id="username" aria-describedby="usernameHelp">
      <small id="usernameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(result => {
          console.log(result.data)
          const token = result.data.token
          localStorage.setItem('token', token)
          this.$store.commit('SET_LOGIN', true)
          this.username = ''
          this.password = ''
          this.$router.push({ name: 'Dashboard' })
          this.$store.dispatch('notif', {
            status: 'success',
            message: 'signed in successfully'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
#login-container{
  width: 100vw;
  height: 80vh;
}
</style>
