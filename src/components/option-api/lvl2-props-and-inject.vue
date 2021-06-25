<template>
  <!-- Корневой элемент необязателен -->
  <div>lvl2</div>
  <div>{{ title}}</div>
  <div>{{ news}}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBook } from '../types';

export default defineComponent({
  name: 'lvl2',

  // принимаем пропсы с родительского компонента
  props: {
    propsTest: String,
    book: {
      type: Object as PropType<IBook>,
      required: true,
    },
  },

  // Аналог пропсов. Отличие в том, что их можно передавать сразу с самого верхнего уровня
  inject: ['title', 'news'],

  emits: {
    addBook(bookName: string) {
      return bookName.length > 0;
    },
  },
  methods: {
    asd() {
      this.$emit('addBook', 'qeqweqwewq');
    },
  },
});
</script>

<style scoped>

</style>
