<template>
  <h1>Авторизация</h1>
    <input type="text" v-model.number="id" placeholder="Введите iD" />
    <div>Символов: {{inputLength()}}</div>
    <button>Вход</button>
</template>

<script>
document.title = 'Авторизация';

export default {
  data() {
    return {
      id: ""
    }
  },
  methods: {
    inputLength: function () {
      return this.id.length
    }
  }
}
</script>

<style scoped>

</style>