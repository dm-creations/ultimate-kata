<template>
  <div class="lesson">
    <div class="code-bg">
      <div class="prompt">
        <h1 class="white-txt">{{ title }}</h1>
        <h2 class="white-txt">
          Add <span class="string">'Orange'</span> to the end of the Array
        </h2>
      </div>
      <div class="visual-tip">
      </div>
      <div class="attempt">
        <div class="greyed-out">
          <!-- to be imported qBoilerplate -->
          <p><span class="func">let</span> <span class="vari">fruits </span>= [];</p>
          <p>
            <span class="vari">fruits </span>= [<span class="string">'Tomato'</span>, <span class="string">'Avocado'</span>, <span class="string">'Lemon'</span>];
            <span class="comment">// Avocado is a fruit - fight me</span>
          </p>
          <br />
          <p>console.<span class="method">log</span>(<span class="string">'Before = ['</span> <span class="operator">+ </span><span class="vari">fruits</span><span class="operator"> + </span><span class="string">']'</span>)</p>
        </div>
        <!-- end of import qBoilerplate -->
        <hr /><hr />
      </div>
      <div class="code-sandbox">
          <!-- <iframe class="box-iframe" src="https://codesandbox.io/s/lesson001-shvdr?codemirror=1&runonclick=1"></iframe> -->
        <div id="editor" class="">let fruits = [];
        fruits = ['Tomato', 'Avocado', 'Lemon']; // Avocado is a fruit - fight me↵

        console.log('Before = [' + fruits + ']')</div>
      </div>
      <hr /><hr />
      <div class="greyed-out">
        <p>console.<span class="method">log</span>(<span class="string">'After = ['</span> <span class="operator">+ </span><span class="vari">fruits</span><span class="operator"> + </span><span class="string">']'</span>)</p>
      </div>
      <div v-on:click="submit" class="run">Submit Code</div>
    </div>
    <iframe class="box-iframe" v-bind:srcdoc="lessonSession"></iframe>
  </div>
</template>

<script>



// var jog = 'I jog';
export default {
  name: 'lesson001',
  props: {
    title: String,
    userValue: Function,
    lessonSession: [String, Function]
  },
  data() {
    return {
      value: 'We jog',
      language: 'ace/mode/html',
      lessonStartLine: 6,
      lessonCode: '<h1>Check The Console for the Answer</h1>' + `
<script>
  let fruits = [];
  fruits = ['Tomato', 'Avocado', 'Lemon']; // Avocado is a fruit - fight me
  console.log('Before = ' + fruits);
  // enter code here
  console.log('After = ' + fruits);
` + "</" + "script>",
      themePath: 'ace/theme/monokai',
      lessonCode1: `<template>
      <head><style>h1{color:yellow;}</style></head>
      <body>
        <h1>Hi there buddy!</h1>
        <script>console.log('whu!?')<script>
      </body>
    </template>`
    }
  },
  mounted() {
    
    // this.$emit('created', this.lessonCode, this.language);

    // console.log();
    this.aceEditor = this.$ace.edit('editor', {
        maxLines: 60,
        fontSize: 16,
        theme: this.themePath,
        mode: this.language,
        tabSize: 4
        }
      );
    this.aceEditor.session.setValue(this.lessonCode);
    this.aceEditor.gotoLine(this.lessonStartLine);

// beforeCreate
// created --> called earlier in order to trigger actions like data fetching from API backend
// beforeMount
// mounted
// beforeUpdate, 
// updated 
// beforeDestroy
// destroyed
  },
  methods: {
    submit() {
      // take code inside ace editor
      let iframe = document.querySelector('.box-iframe');
      iframe.srcdoc = this.aceEditor.getValue();

      // insert it into iframe
    }
  },
  updated() {

  }
}
</script>

<style scoped>
#editor { 
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-height: 400px;
}
h1 {
  margin-top: 0;
}
h2 {
  margin: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.code-bg {
  box-sizing: border-box;
  position: relative;
  background-color: #212121; /* ideally {{code-bg}} */
  height: calc(100vh - 105px);
}
.prompt {
  box-sizing: border-box;
  padding: 10px 0;
  height: 120px;
  border-bottom: solid 1px white;
}
.white-txt {
  color: white;
}
.greyed-out {
  font-family: 'Menlo';
  width: 80%;
  color: white;
  margin-left: auto;
  text-align: left;
  opacity: 0.6;
}
.func {
  color: #9a7fd5;
}
.vari {
  color: #5db0d7;
}
.string {
  color: #F28B54;
}
.operator, .method {
  color: #d2c057;
}
.code-sandbox {
  width: 100%;
  margin-right: auto;
  min-height: 400px;
  margin-left: auto;
  text-align: left;
  overflow: hidden;
}
.box-iframe {
  box-sizing: border-box;
  width: 100%;
  min-height: 600px;
}
.comment {
  color: #747474;
}
textarea {
  width: 100%;
  height: 400px;
  overflow: scroll;
  background-color: inherit;
  outline: none;
  border: none;
  font-family: Menlo;
  color: white;
  font-size: inherit;
}
#editor {
  height: 600px;
}
.cursor {
  margin-bottom: -20px;
  background-color: white;
  width: 5px;
  height: 1em;
  animation-name: blinky;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes blinky {
  from { background-color: inherit; }
  to { background-color: white; }
}
.run {
  background-color: #4CAF50;
  /* position: absolute; */
  bottom: 10px;
  right: 10px;
  margin: 0 auto;
  margin-top: 15px;
  width: 120px;
  padding: 8px;
  border-radius: 5px;
  transition: all 0.2s ease-in 0s;
  cursor: pointer
}
.run:hover {
  color: white;
  transition: all 0.2s ease-in 0s;
  font-weight: 500;
}
@media screen and (min-width: 667px) {
  .lesson {
    display: flex;
  }
  .code-bg {
    width: 50%;
  }
  .box-iframe {
    width: 50%;
  } 
}
</style>
