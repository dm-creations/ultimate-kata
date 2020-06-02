<template>
  <div id="app">
    <!-- <HelloWorld msg="Helloooo to Your Vue.js App"/>
    <question title="Question"></question>
    <render title="Render"></render> -->
    <app-header></app-header>

    <router-view v-on:created="setCode"/>
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
  beforeCreate: function() {
    // console.log(this.$ace)
  },
  mounted() {},
  methods: {
    setCode(lessonCode, language, theme) {
      // Take the lesson from the child component into vm.data()
      this.currentLesson = lessonCode;
      this.modePath = language || this.modePath; // Javascript is the default if lesson component has no lesson language
      this.themePath = theme || this.themePath; // what if lesson has theme but not language or vice versa? Always set false inside components?
    },
    goSay(foo) {
      console.log(foo ? foo : 'keep trying')
    },
    childCode(event, value) {
      console.log('From the child:', value)
    },
    getCode() {
      return this.aceEditor.getValue();
    }
  },
  data() {
    return {
      lessonSession: '',
      themePath: 'ace/theme/monokai',
      currentLesson: ''
    }
  }
}

//   setup() {
//     return { dode }
//     }
//  DOM Manipuations happen during and after mounted I think


// beforeCreate
// created --> called earlier in order to trigger actions like data fetching from API backend
// beforeMount
// mounted
// beforeUpdate, 
// updated 
// beforeDestroy
// destroyed



// why do we want data return { aceEditor: null, } ? 

      // this.aceEditor.setSelection({
      //           start: {row: 0, column: 0},
      //           end: {row: 0, column: 0}
      //       });
// editor.setTheme("ace/theme/cobalt");
// editor.session.setMode("ace/mode/javascript");

// editor.commands.addCommands([{
//   name: "showSettingsMenu",
//   bindKey: {win: "Ctrl-q", mac: "Ctrl-q"},
//   exec: function(editor) {
//     editor.showSettingsMenu();
//   },
//   readOnly: true
// }]);

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
