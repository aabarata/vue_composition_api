<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Event/>
    <Search/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Event from './components/Event.vue';
import Search from './components/Search.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Event,
    Search
  }
});
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
