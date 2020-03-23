import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    countries: [],
    reports: [],
    newCountries: []
  },
  mutations: {
    SET_LOGIN (state, value) {
      state.isLogin = value
    },
    SET_COUNTRIES (state, value) {
      state.countries = value
    },
    SET_NEWCOUNTRIES (state, value) {
      state.newCountries = value
    },
    SET_REPORTS (state, value) {
      state.reports = value
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
    },
    fetchCountries (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/countries',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('SET_COUNTRIES', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchReports (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/reports',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('SET_REPORTS', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteReport (context, payload) {
      const token = localStorage.getItem('token')
      const id = payload.id
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/reports/${id}`,
        headers: {
          token
        }
      })
        .then(result => {
          console.log(result.data)
          context.dispatch('fetchReports')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addReport (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        method: 'POST',
        url: 'http://localhost:3000/reports',
        headers: {
          token
        },
        data: payload
      })
        .then(result => {
          context.dispatch('fetchReports')
        })
        .catch(err => {
          console.log(err.response.data)
          console.log(err)
        })
    }
  },
  modules: {
  }
})
