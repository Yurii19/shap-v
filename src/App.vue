<template>
  <HeadComponent />
  <router-view></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import HeadComponent from './components/HeadComponent.vue';

@Options({
  components: {
    HelloWorld,
    HeadComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.router-link-active {
  border-bottom: 2px solid yellow;
}
.router-link-exact-active {
  /* border: 1px solid blue; */
}
</style>
