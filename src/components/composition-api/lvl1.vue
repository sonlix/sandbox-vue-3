<template>
  <section>
    <div>123</div>
    <lvl2PropsAndInject
      :propTest="textError"
      :book="book"
      @addBook="addBook"
    ></lvl2PropsAndInject>
    <button @click="testEmit">Жми</button>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
} from 'vue';
import lvl2PropsAndInject from './lvl2-props-and-inject.vue';
import { IBook } from '../types';

export default defineComponent({
  name: 'lvl1',

  components: {
    lvl2PropsAndInject,
  },

  // описание emits
  emits: ['event1', 'event2'],

  setup(props, { emit }) {
    /** Data */
    const book: IBook = reactive({
      title: 'title',
      author: 'Author',
      year: 2020,
    });
    const isError = ref<boolean>(false);
    const textError = ref<string>('');
    const someText = ref<string>('');

    /** computed */
    const bookTitle = computed<string>((): string => `${book.title}!`);

    /** methods */
    function asd(num: number): boolean {
      return num > 0;
    }

    function testEmit(): void {
      emit('event1', 1);
      emit('event2', 'asd');

      asd(123);
    }

    function addBook(bookName: string): void {
      someText.value = bookName;
    }

    /** watch */
    watch(isError, (newValue: boolean): void => {
      if (newValue) {
        textError.value = 'Ошибка';
      }
    });

    return {
      book,
      isError,
      textError,
      someText,
      bookTitle,
      testEmit,
      addBook,
      asd,
    };
  },

});
</script>

<style scoped>

</style>
