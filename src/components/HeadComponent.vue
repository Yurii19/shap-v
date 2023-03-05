<template>
  <div class="head-container bg-info">
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HeadComponent extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link:hover {
  /* border-bottom: 1px dotted white; */
}
</style>
