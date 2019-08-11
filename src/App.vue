<template>
  <div id="app" class="fxbx fd-c">
    <Header />
    <ContentWrapper />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import ContentWrapper from './components/content/ContentWrapper.vue';

export default {
  name: 'app',
  components: {
    Header,
    ContentWrapper
  }
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
  color: #ddd;
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
