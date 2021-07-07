import { createStore } from 'vuex';
import { INote } from './types';

interface State {
  str: string;
  notes: INote[];
  currentNote: INote;
}

export default createStore({
  // state: {
  //   str: "",
  //   notes: [] as INote[],
  //   currentNote: {
  //     title: "",
  //     id: 0
  //   } as INote
  // },
  // или так
  state: {
    str: "",
    notes: [],
    currentNote: {
      title: "",
      id: 0
    },
  } as State,

  getters: {
    getIdOfLastNote(state: State): number {
      if (state.notes.length > 0) {
        const index = state.notes.length - 1

        return state.notes[index].id
      } else {
        return 0
      }
    }
  },

  mutations: {
    addNote(state: State) {
      state.notes.push(state.currentNote)
    },
    setCurrentNote(state: State, payload: INote) {
      state.currentNote = payload
    },
    deleteTodo(state: State, index: number) {
      state.notes.splice(index, 1)
    }
  },
  actions: {
    fetchCurrentNote({ state, commit }, noteId: number) {
      let note: INote = JSON.parse(JSON.stringify(state.notes.find((note: INote) => note.id === noteId)))
      commit('setCurrentNote', note)
    },
    updateCurrentNote({ commit }, note: INote) {
      commit('setCurrentNote', note)
    },
  },
  modules: {
  },
});
