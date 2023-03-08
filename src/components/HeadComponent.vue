<template>
  <div class="head-container bg-info d-flex justify-content-between">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="/"
          ><router-link to="/" class="text-white">Home</router-link></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"
          ><router-link to="/form" class="text-white">Form</router-link></a
        >
      </li>
    </ul>
    <div class="d-flex">
      <button>Log out</button>
      <GoogleSignInButton
        @success="handleLoginSuccess"
        @error="handleLoginError"
      ></GoogleSignInButton>
    </div>
  </div>
</template>

<script>
import { GoogleSignInButton } from 'vue3-google-signin';
export default {
  components: { GoogleSignInButton },
  methods: {
    handleLoginError: () => {
      console.error('Login failed');
    },

    handleLoginSuccess: (response) => {
      const { credential } = response;
      console.log('Access Token', credential);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link:hover {
  /* border-bottom: 1px dotted white; */
}
</style>
