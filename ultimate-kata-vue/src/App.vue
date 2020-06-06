<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import routes from './router'
import header from './components/header.vue';
import footer from './components/footer.vue';

export default {
  name: 'App',
  routes,
  components: {
    'app-header': header,
    'app-footer': footer
  },
  data() {
    return {
      lessonSession: '',
      currentLesson: ''
    }
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
p {
  margin: 2px 0;
}
</style>
