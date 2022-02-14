<template>
  <div class="content-center">
    <!--    <div class="text-5xl text-bold bg-pink-600">tailwind css</div>-->
    <div>
      <img
        alt="Vue logo"
        src="https://yurupro.cloud/img/logo.png"
        class="h-32 w-32 mr-2"
        style="margin: 0 auto"
      />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
