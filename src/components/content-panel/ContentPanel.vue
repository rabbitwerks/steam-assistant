<template>
  <div class="content--outer f1 fxbx fd-c a-ctr">
    <div class="content--header fxbx a-ctr">
      <h3>{{ greetingText }}</h3>
    </div>
    <div class="content--inner">
    </div>
  </div>
</template>

<script>
import { value, computed } from 'vue-function-api';

export default {
  setup() {
    const greetingText = value('Welcome! Let\'s grab some Steam stats!');
    return {
      greetingText,
    }
  }

}
</script>

<style scoped>
.content--outer > * {
  max-width: 70vw;
  width: 100%;
}
.content--header {
  height: 6rem;
  padding: 0 1.5rem;
  background-color: var(--header-grey);
}
.content--header h3 {
  font-weight: 300;
}
.content--inner {
  height: 60vh;
  background-color: var(--dark-blue);
}
</style>
