<template>
    <div class="min-h-screen flex items-center justify-center border-t border-gray-100">
      <div class="border mt-2 p-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div v-if="message" class="bg-red-500 mb-2 text-white p-2 rounded">{{ message  }}</div>
        <h2 class="text-2xl font-semibold mb-6">Login</h2>
        <div>
          <form>
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input type="email" id="username" class="mt-1 p-2 border w-full rounded-md" v-model="user.email" />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" class="mt-1 p-2 border w-full rounded-md"  v-model="user.password"/>
            </div>
            <div class="mb-6">
              <button type="button" @click="login" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
import UserDataService from '@/services/UserDataService'

export default {
  data () {
    return {
      message: null,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      UserDataService.postLogin(this.user)
        .then(response => {
          this.message = null
          //   console.log(response.data)
          this.$store.dispatch('user', response.data.user)
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          this.message = error.response.data.message
        })
    }
  }
}
</script>
