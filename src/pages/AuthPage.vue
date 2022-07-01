<template>
  <div class="auth">
    <h1>LeadHit</h1>
    <form class="auth__form" onsubmit="return false">
      <el-input type="text"
                class="auth__input"
                v-model="id"
                placeholder="id сайта"
                required
                minlength="24"
                maxlength="24"
                pattern="[a-zA-Z0-9]"
      />
      <el-button @click="authGet(id)">Вход</el-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

let headers = {
  'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
  'Leadhit-Site-Id': ''
}

document.title = 'Авторизация';

export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    authGet: function (input) {
      headers['Leadhit-Site-Id'] = input;
      // Проверка на длину
      axios
          .get('https://track-api.leadhit.io/client/test_auth', {headers})
          .then(response => {
            this.info = response.data.message;
            if (this.info === "ok") {
              localStorage.setItem('leadhit-site-id', input);
              this.$router.push('/Analitics')
              document.title = 'Аналитика';
            } else {
              alert("Неверный ID!")
            }
          })
          .catch(error => alert(error))
    },
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
    background: rgba(255, 68, 2, 0.73);
    padding: 12px;
    border-radius: 12px;
  }

  &__input {
    margin-right: 12px;
    min-width: 204px;
  }
}
</style>