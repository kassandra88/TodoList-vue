const app = Vue.createApp({
  data() {
    return {
      valueInput: 'hgfgn',
      needDoList: [],
      completeList: [],
    }
  },
  methods: {
    handleInput(e) {
      this.valueInput = e.target.value
    },

    handleAddTodo() {
      if (this.valueInput === '') return
      this.needDoList.push({
        id: Math.random(),
        title: this.valueInput,
      })
      this.valueInput = ''
    },

    doCheck(index, type) {
      if (type === 'need') {
        const completeMask = this.needDoList.splice(index, 1)
        this.completeList.push(...completeMask)
      } else {
        const notCompleteMask = this.completeList.splice(index, 1)
        this.needDoList.push(...notCompleteMask)
      }
    },
    handleRemoveTodo(index, type) {
      if (type === 'need') {
        this.needDoList.splice(index, 1)
      } else {
        this.completeList.splice(index, 1)
      }
    },
  },
}).mount('#app')
