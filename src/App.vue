<template>
  <div id="app" class="fxbx fd-c">
    <div class="header fxbx a-ctr">
      <img src="./assets/img/Steam_icon_logo.svg" alt="steam logo">
      <div class="header--inner f1 fxbx spc-bt a-ctr">
        <h2 class="text-heading">STEAM ASSISTANT</h2>
        <button class="btn">
          Assist!
        </button>
      </div>
    </div>
    <div class="content f1"></div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
@import url('./assets/css/flexbox-util.css');
@import url('./assets/css/main.css');

#app {
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-blue);
  color: #2c3e50;
}
.header {
  height: 6rem;
  padding-right: 1.5rem;
  background: var(--nav-grey);
}
.header img {
  height: 4rem;
  margin: 0 1.5rem;
}
</style>
