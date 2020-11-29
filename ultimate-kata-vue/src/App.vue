<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <why-us></why-us>
    <app-footer></app-footer>
  </div>
</template>

<script>
import routes from './router'
import header from './components/header.vue';
import whyUs from './components/WhyUs.vue'
import footer from './components/footer.vue';

export default {
  name: 'App',
  routes,
  components: {
    'app-header': header,
    'why-us': whyUs,
    'app-footer': footer
  }
}

// beforeCreate
// created --> called earlier in order to trigger actions like data fetching from API backend
// beforeMount
// mounted
// beforeUpdate, 
// updated 
// beforeDestroy
// destroyed

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
  vertical-align: top;
}
#app .lesson {
  border: 0;
}
h1, .h1 {
  font-size: 50px;
}
h2, .h2 {
  font-size: 40px;
}
h3, .h3 {
  font-size: 30px;
}
h4, .h4 {
  font-size: 20px;
}
p {
  margin: 2px 0;
}
</style>
