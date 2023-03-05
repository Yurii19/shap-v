<template lang="html">
  <section class="form-container">
    <h1>{{ viewTitle }}</h1>
    <form v-on:submit.prevent="submitForm()"> 
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          :value="nameInput"
          @input="updateNameInput($event)"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Device</label>
        <input
          type="text"
           :value="deviceInput"
          class="form-control"
          id="exampleInputPassword1"
          @input="updateDeviceInput($event)"
        />
      </div>
      <button type="submit" class="btn btn-primary mr-2">Submit</button>
      <button type="button" class="btn btn-warning" @click.prevent="clearInputs()">Clear</button>
    </form>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  props: {
    name: String,
  },
})
export default class Form extends Vue {
  viewTitle: string = 'Form page';
  nameInput: string = '';
  deviceInput: string = '';

  // methods section

  submitForm() {
    //e.preventDefault();
    console.log(this.nameInput);
    console.log(this.deviceInput);
  }

clearInputs(){
  this.nameInput = ''
  this.deviceInput = ''
}

  updateNameInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.nameInput = input.value;
  }

   updateDeviceInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.deviceInput = input.value;
  }
}
</script>

<style scoped>
.form-container {
  width: 80%;
  margin: 0 auto;
}
</style>
