<template>
  <div id="app">
    <!-- <HelloWorld msg="Helloooo to Your Vue.js App"/>
    <question title="Question"></question>
    <render title="Render"></render> -->
    <app-header></app-header>
          <div id="editor" class="">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
      }</div>
    <lesson001></lesson001>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import question from './components/question.vue';
// import render from './components/render.vue';
import header from './components/header.vue';
import lesson001 from './components/lesson001.vue';
import footer from './components/footer.vue';
// import ace from 'ace-builds/src/ace.js';
// import 'ace-builds/src/mode-javascript.js';

export default {
  name: 'App',
  components: {
    'app-header': header,
    lesson001,
    'app-footer': footer
  },
  data() {
    return {
      component: 'lesson001'
    }
  }
}

// var editor = ace.edit("editor");
// editor.setTheme("ace/theme/cobalt");
// editor.session.setMode("ace/mode/html");

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
  box-sizing: border-box;
  display: block;
  width: 100%;
}
p {
  margin: 2px 0;
}
</style>
