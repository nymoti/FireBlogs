<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your Password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <email class="icon"/>
          </div>
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "ForgotPassword",
  components: {
    email,
    Modal,
    Loading,
  },
  data() {
    return {
      email: null,
      modalActive: null,
      modalMessage: "",
      loading: null,
      error: null,
      errorMsg: ""
    }
  },
  methods: {
    resetPassword() {
      if (this.email != null) {
        this.loading = true;
        firebase
          .auth().sendPasswordResetEmail(this.email)
          .then(() => {
            this.modalMessage = "If your account exists, you will reveive an email";
            this.loading = false;
            this.modalActive = true;
          })
          .catch((err) => {
            this.modalMessage = err.message;
            this.loading = false;
            this.modalActive = true;
          });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out the Email field!";
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    }
  }
}
</script>

<style lang="scss" scoped>

.reset-password {
  position: relative;

  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }

      p {
        margin-bottom: 32px;
        text-align: center;
      }
    }
  }
}

</style>