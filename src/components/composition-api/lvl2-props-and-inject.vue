<template>
  <!-- Корневой элемент необязателен -->
  <div>lvl2</div>
  <div>{{ title}}</div>
  <div>{{ news}}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject } from 'vue';
import { IBook } from '../types';

export default defineComponent({
  name: 'lvl2',

  props: {
    propsTest: String,
    book: {
      type: Object as PropType<IBook>,
      required: true,
    },
  },

  emits: {
    addBook(bookName: string) {
      return bookName.length > 0;
    },
  },

  setup(props, { emit }) {
    /** inject */
    const title = inject<string>('title');
    const news = inject<string>('news');

    /** methods */
    function asd() {
      emit('addBook', 'qeqweqwewq');
    }

    return {
      title,
      news,
      asd,
    };
  },
});
</script>

<style scoped>

</style>
