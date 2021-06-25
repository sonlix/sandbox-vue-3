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
import { defineComponent } from 'vue';
import lvl2PropsAndInject from './lvl2-props-and-inject.vue';
import { IBook } from '../types';

interface IData {
  book: IBook,
  isError?: boolean,
  textError: string,
  someText: string,
}

export default defineComponent({
  name: 'lvl1',

  // описание emits
  emits: ['event1', 'event2'],

  // или так
  /*
  emits: {
    event1: (payload: number) => true,
    event2: (payload: string) => true,
  },
  */

  components: {
    lvl2PropsAndInject,
  },

  data():IData {
    return {
      book: {
        title: 'title',
        author: 'Author',
        year: 2020,
      },
      isError: false,
      textError: '',
      someText: '',
    };
  },
  // или так
  /*
  data: (): IData => ({
    book: {
      title: 'title',
      author: 'Author',
      year: 2020,
    },
    isError: false,
    textError: '',
  }),

   */


  computed: {
    bookTitle(): string {
      return `${this.book.title}!`;
    },
  },

  watch: {
    isError(val: boolean): void {
      if (val) {
        this.textError = 'Ошибка';
      }
    },
  },

  methods: {
    testEmit(): void {
      this.$emit('event1', 1);
      this.$emit('event2', 'asd');

      this.asd(123);
    },
    addBook(bookName: string): void {
      this.someText = bookName;
    },
    asd(num: number): boolean {
      return num > 0;
    },
  },
});
</script>

<style scoped>

</style>
