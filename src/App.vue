<template>
  <div>
    <nav
      class="bg-gray-100 shadow-md border-gray-500 px-2 sm:px-4 rounded dark:bg-gray-400"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <router-link to="/app" class="flex items-center px-2">
          <img
            src="https://yurupro.cloud/img/logo.png"
            alt="Logo"
            class="h-14 w-14 mr-2"
          />
          <div class="grid grid-rows-2 grid-flow-col pt-2.5">
            <span class="font-semibold text-lg col-span-1">
              <span class="text-teal-700">Vue</span>
              <span class="text-yellow-600">Components</span>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-red-700"
                >Party</span
              >
            </span>
            <span
              class="font-semibold text-xs text-gray-900 col-span-1 text-center"
            >
              Presented By ゆるプロ日記
            </span>
          </div>
        </router-link>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-300 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://yurupro.cloud/img/logo.png"
              alt="user photo"
            />
          </button>

          <div
            class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown"
          >
            <div class="py-3 px-4">
              <span class="block text-sm text-gray-900 dark:text-white"
                >Bonnie Green</span
              >
              <span
                class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
                >name@flowbite.com</span
              >
            </div>
            <ul class="py-1" aria-labelledby="dropdown">
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>-->
            <!--            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>-->
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-28 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <router-link
                to="/app"
                class="py-4 px-4 font-semibold text-green-600 hover:text-opacity-40 transition duration-300"
              >
                <div class="text-base grid grid-rows-2 grid-flow-col pt-2.5">
                  Top
                  <span class="text-xs col-span-1 text-center"> トップ </span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/app/free"
                class="py-4 px-4 text-yellow-600 font-semibold hover:text-opacity-40 transition duration-300"
              >
                <div class="text-base grid grid-rows-2 grid-flow-col pt-2.5">
                  Samples
                  <span class="text-xs col-span-1 text-center">
                    サンプル集
                  </span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/app/about"
                class="py-4 px-4 font-semibold hover:text-opacity-40 text-red-700"
              >
                <div class="text-base grid grid-rows-2 grid-flow-col pt-2.5">
                  About
                  <span class="text-xs col-span-1 text-center">
                    私について
                  </span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/app/contact"
                class="py-4 px-4 font-semibold hover:text-opacity-40 text-indigo-900"
              >
                <div class="text-base grid grid-rows-2 grid-flow-col pt-2.5">
                  Contact
                  <span class="text-xs col-span-1 text-center"> 連絡先 </span>
                </div>
              </router-link>
            </li>
          </ul>
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
}
</style>
