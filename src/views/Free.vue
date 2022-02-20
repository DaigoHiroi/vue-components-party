<template>
  <div>
    <div
      class="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group"
          >
            <svg
              class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path></svg
            >入力フォーム
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-flex py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
            aria-current="page"
          >
            <svg
              class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path></svg
            >テーブル
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group"
          >
            <svg
              class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path></svg
            >グラフ
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group"
          >
            <svg
              class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              ></path></svg
            >モーダル
          </a>
        </li>
        <li>
          <a
            class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
            >カード</a
          >
        </li>
      </ul>
    </div>
    <div class="pb-3"></div>
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
