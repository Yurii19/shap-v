<template lang="html">
  <h1>{{ viewTitle }}</h1>
  <FormComponent />
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';
// import { Options, Vue } from 'vue-class-component';
// @Options({
//   props: {
//     name: String,
//   },
//   components: {
//     FormComponent,
//   },
// })
export default {
  components: {FormComponent},
  data() {
    return {
      viewTitle: 'Form page',
    };
  },
};
</script>

<style scoped></style>
