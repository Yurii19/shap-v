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
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Show credential
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <span><b>Email: </b>{{ userCredentials.email }}</span>
      </div>
    </div>
    <div class="d-flex">
      <button @click="logOut">Log out</button>
      <GoogleSignInButton
        @success="handleLoginSuccess"
        @error="handleLoginError"
      ></GoogleSignInButton>
    </div>
  </div>
</template>

<script>
import { GoogleSignInButton, decodeCredential } from 'vue3-google-signin';
export default {
  components: { GoogleSignInButton },
  data() {
    return {
      userCredentials: { email: 'unlogined' },
    };
  },
  methods: {
    logOut() {
      const cc = this.$cookies;
      //cc.remove('g_state')
      console.log(cc.keys());
      //console.log(cc)
    },

    handleLoginError: () => {
      console.error('Login failed');
    },

    handleLoginSuccess(response) {
      const { credential } = response;
      this.userCredentials = decodeCredential(credential);
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
