<template>
  <div class="free">
    <ul id="sample">
      <li v-for="item in sortedList" :key="item">
        {{ item }}
      </li>
    </ul>
    <div>
      {{ name }}
    </div>

    <input v-model="text" placeholder="edit me" />
    <div>
      {{ setup().testMatchSorter(this.list, text) }}
    </div>
    ======
    <details>
      <summary>Section title</summary>
      <p>Here is the content!</p>
      <summary>Title</summary>
      <p>Here is the content that is open by default!</p>
      <summary>Title</summary>
      <p>Here is the content that is open by default!</p>
      <summary>Title</summary>
      <p>Here is the content that is open by default!</p>
    </details>
    =========
    <div style="min-height: 6000px"></div>
    <!--    <details open>-->
    <!--      <summary>Title</summary>-->
    <!--      <p>Here is the content that is open by default!</p>-->
    <!--    </details>-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { matchSorter } from "match-sorter";
import { reactive, ref } from "vue";

@Options({})
export default class Free extends Vue {
  name = "sample man";
  list = reactive<string[]>([
    "aaa",
    "als",
    "asld",
    "as;d",
    "caks",
    "ca",
    "ksdfj",
    "lcl",
    "zzc",
  ]);
  sortedList = matchSorter(this.list, "c");
  text = "";

  setup() {
    const count = ref(0);

    function increment() {
      count.value += 1;
    }

    function testMatchSorter(list: string[], input: string): string[] {
      return matchSorter(list, input);
    }

    return {
      increment,
      testMatchSorter,
    };
  }
}
</script>

<style scoped>
progress {
  appearance: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

::-webkit-progress-bar {
  background-color: transparent;
}

::-webkit-progress-value {
  background-color: #3fb983;
}
</style>
