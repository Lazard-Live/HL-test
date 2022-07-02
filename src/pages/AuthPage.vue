<template>
  <div class="auth">
    <h1>LeadHit</h1>
    <form class="auth__form" onsubmit="return false">
      <input
        v-on:keypress="errorInfo = ''"
        type="text"
        class="auth__input"
        v-model="id"
        placeholder="id сайта"
        maxlength="24"
      />
      <button class="auth__button" @click="authGet(id)">Войти</button>
    </form>

    <div class="auth__message">{{ errorInfo }}</div>
  </div>
</template>

<script>
import axios from "axios";

let headers = {
  "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
  "Leadhit-Site-Id": "",
};

document.title = "Авторизация";

export default {
  data() {
    return {
      id: "",
      errorInfo: "",
    };
  },
  methods: {
    authGet: function (input) {
      if (input.length === 0) {
        this.errorInfo = "Введите ID сайта";
      } else if (input.length !== 24) {
        this.errorInfo = "ID сайта должен содержать 24 символа";
      } else {
        headers["Leadhit-Site-Id"] = input;

        axios
          .get("https://track-api.leadhit.io/client/test_auth", { headers })
          .then((response) => {
            this.info = response.data.message;
            if (this.info === "ok") {
              localStorage.setItem("leadhit-site-id", input);
              this.$router.push("/Analytics");
            }
          })
          .catch((error) => (this.errorInfo = error.message));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #2c3e50;
$border-active: #5b80a8;
$bg-color: #ff4402;

.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__form {
    display: inline-flex;
    background: $bg-color;
    padding: 12px;
    border-radius: 12px;
  }

  &__input {
    transition: 0.5s ease;
    outline: none;
    border: 2px solid $primary-color;
    border-radius: 4px;
    margin-right: 12px;
    min-width: 204px;

    &:focus {
      border-color: $border-active;
    }
  }

  &__button {
    transition: 0.5s ease;
    outline: none;
    background-color: #ffffff;
    border: 2px solid $primary-color;
    border-radius: 4px;

    &:focus {
      border-color: $border-active;
    }

    &:active {
      border-color: $border-active;
    }

    &:hover {
      color: $border-active;
      border-color: $border-active;
    }
  }

  &__message {
    margin: 12px;
  }
}
</style>
