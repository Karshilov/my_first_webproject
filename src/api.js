import axios from 'axios'
import Vue from 'vue'
import qs from 'querystring'

// 用 Vue 做一个状态机来充当 api 接口
export default new Vue({
  data: {
    axios: axios.create({
      baseUrl: '127.0.0.1:3000',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
      validateStatus: () => true
    })
  },
  created() {
  },
  methods: {
    async get(route = '/', data = {}) {
      let params = qs.stringify(data)
      if (params) params = '?' + params
      return this.handleResponse(await this.axios.get(route + params))
    },
    async post(route = '/', data = {}) {
      console.log(data)
      console.log(route)
      return this.handleResponse(await this.axios.post(route, data))
    },
    async put(route = '/', data = {}) {
      return this.handleResponse(await this.axios.put(route, data))
    },
    async delete(route = '/', data = {}) {
      let params = qs.stringify(data)
      if (params) params = '?' + params
      return this.handleResponse(await this.axios.delete(route + params))
    },
    handleResponse(response) {
      let { status: httpStatus, data: jsonData } = response
      if (httpStatus < 400) {
        let { code, result, reason } = jsonData

        if (code < 400) {
          return result
        }
        // 出错时的处理
        else {
          Vue.toasted.show('请求失败：' + reason)
          throw new Error(reason)
        }
      } else {
        Vue.toasted.show(`请求出错 (${ httpStatus })`)
        throw new Error('Request failed with status ' + httpStatus)
      }
    },
  }
})