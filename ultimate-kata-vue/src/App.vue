<template>
  <div id="app">
    <HelloWorld msg="Helloooo to Your Vue.js App"/>
    <question title="Question" ></question>
    <render title="Render" ></render>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import question from './components/question.vue';
import render from './components/render.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, question, render
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#app .question,
#app .render {
  display: inline-block;
  width: 50%;
}
</style>
