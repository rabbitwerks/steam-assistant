<template>
  <div class="header fxbx a-ctr">
    <img src="../../assets/img/Steam_icon_logo.svg" alt="steam logo">
    <div class="header--inner f1 fxbx spc-bt a-ctr">
      <h2 class="text-heading"
        >{{ appTitle }}
      </h2>
      <button class="btn"
        >{{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { value } from 'vue-function-api';

export default {
  setup() {
    const appTitle = value('STEAM ASSISTANT');
    const buttonText = value('Assist!');

    return {
      appTitle,
      buttonText
    }
  }

}
</script>

<style scoped>
.btn {
  background-color: var(--text-blue);
  color: var(--dark-blue);
}
.btn:active {
  background-color: #4ca1d3;
}
</style>
