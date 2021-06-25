<template>
  <div>asdadas</div>
  <div class="home">
    <lvl1 msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import lvl1 from '@/components/composition-api/lvl1.vue';

interface IData {
  news: string[],
}

export default defineComponent({
  name: 'Home',
  components: {
    lvl1,
  },
  data(): IData {
    return {
      news: ['1', '2'],
    };
  },

  // передача пропсов к дочернему компоненту во второй уровень вложенности
  provide(): {
    title: string,
    news: string[],
    } {
    return {
      title: 'asdasd',
      news: this.news,
    };
  },

});
</script>
