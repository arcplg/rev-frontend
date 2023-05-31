export const useIndexStore = defineStore('index', {
  state: () => ({
    item: null,
  }),

  getters: {
    getItemLabel: (state) => {
      return item.label
    },
  },

  actions: {
    doTask () {
    },
  },
})
