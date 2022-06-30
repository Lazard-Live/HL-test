<template>
  <div class="auth">
    <h1>LeadHit</h1>
    <el-form class="auth__form">
      <el-input type="text"
                class="auth__input"
                v-model.number="id"
                placeholder="id сайта"
      />
      <el-button>Вход</el-button>
    </el-form>
  </div>
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

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__form {
    display: inline-flex;
    max-width: 500px;
    background: rgba(255, 68, 2, 0.73);
    padding: 12px;
    border-radius: 12px;
  }

  &__input {
    width: 400px;
    margin-right: 12px;
  }
}
</style>