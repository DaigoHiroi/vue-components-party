<template>
  <div>
    <nav class="shadow-md">
      <div class="max-w-12xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Website Logo -->
            <router-link to="/app" class="flex items-center py-4 px-2">
              <img
                src="https://yurupro.cloud/img/logo.png"
                alt="Logo"
                class="h-16 w-16 mr-2"
              />
              <span class="font-semibold text-lg">
                <span class="text-green-600">Vue</span>
                <span class="text-yellow-600">Components</span>
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-red-600"
                  >Party
                </span>
              </span>
            </router-link>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center justify-end space-x-1">
              <router-link
                to="/app"
                class="py-4 px-2 font-semibold text-green-600 hover:text-opacity-40 transition duration-300"
                >Home</router-link
              >
              <router-link
                to="/app/free"
                class="py-4 px-2 text-yellow-600 font-semibold hover:text-opacity-40 transition duration-300"
                >Samples</router-link
              >
              <router-link
                to="/app/about"
                class="py-4 px-2 text-pink-600 font-semibold hover:text-opacity-40 transition duration-300"
                >About</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
  background-color: #f4f6ff;
  //a {
  //  font-weight: bold;
  //  color: #2c3e50;
  //
  //  &.router-link-exact-active {
  //    color: #42b983;
  //  }
  //}
}
</style>
