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
//import { CLIENT_ID, REDIRECT_URI, SCOPES } from '@/variables/constants';
import { GoogleSignInButton, decodeCredential } from 'vue3-google-signin';
import { useCodeClient } from 'vue3-google-signin';
// import { getCurrentInstance } from 'vue';
// import { useGsiScript ,useGoogleAuth } from 'vue3-google-signin';
//import { CLIENT_ID } from '@/variables/constants';

// const cbTest = async (response) => {
//   console.log('test: ', response);
//   setTimeout(()=>{ window.localStorage.setItem('gapi', response); console.log('test: ', response);},2000)

//   return response;
// };

export default {
  setup() {
    // const { isReady, login, logout, setAccessToken, error } = useCodeClient({
    //   clientId: CLIENT_ID,
    //   redirectUri: REDIRECT_URI,
    //   scope: SCOPES,
    //   prompt: 'consent',
    // });
    // const cbTest = async (response) => {
    //   const res = await response.getClient()
    //   console.log(res)
    // };

    const { getClient, client } = useCodeClient({
      onSuccess: async ()=>{
        const pp = getClient()
        console.log('pp -> ', pp)
        
        window.localStorage.setItem('gapi', 'pp');
      },
      onError(){
        console.log('error')
      }
    });
    //const gapi = getClient();

    return {  client };
  },
  components: { GoogleSignInButton },
  data() {
    return {
      userCredentials: { email: 'unlogined' },
    };
  },
  methods: {
    logOut() {
      // const cc = this.$cookies;
      console.log(window.localStorage);
      console.log('client -> ',this.client);
      // console.log(cc.keys());
      //const theClient = this.getClient()
      // console.log(
      //   'scriptLoaded: ',
      //   this.isReady,
      //   this.login,
      //   this.logout,
      //   this.setAccessToken,
      //   this.error,
      //   this.getClient
      // );
    },

    handleLoginError: () => {
      console.error('Login failed');
    },

    handleLoginSuccess(response) {
      const { credential } = response;
      this.userCredentials = decodeCredential(credential);
      // const auth = new GoogleAuth ({
      //   clienId: CLIENT_ID
      // })
      // const client = auth.client;
      // console.log('Access Token', client);
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
