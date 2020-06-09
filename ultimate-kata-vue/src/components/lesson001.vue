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
        <div id="editor" class="">Code Loading...</div>
      </div>
      <hr /><hr />
      <div class="greyed-out">
        <p>console.<span class="method">log</span>(<span class="string">'After = ['</span> <span class="operator">+ </span><span class="vari">fruits</span><span class="operator"> + </span><span class="string">']'</span>)</p>
      </div>
      <div v-on:click="resetLesson" class="run reset">Reload</div><!-- cute reload gun or resheath animation -->
      <div v-on:click="submit" class="run">Submit Code</div>
    </div>
    <div class="results-container">
      <iframe class="box-iframe" v-bind:srcdoc="lessonSession"></iframe>
      <div id="console-log-div" class="console-log-div"></div>
    </div>
  </div>
</template>

<script>

// const consoleLogDiv = () => import ('console-log-div/console-log-div.js');
// import ('console-log-div/console-log-div.js');
import 'console.history'

// var jog = 'I jog';
export default {
  name: 'lesson001',
  data() {
    return {
      value: 'We jog',
      language: 'ace/mode/html',
      lessonStartLine: 9,
      lessonCode: `<h1>Check The Console for the Answer</h1>\n<script>
    let fruits = [];
    fruits = ['Tomato', 'Avocado', 'Lemon']; // Avocado is a fruit - fight me
    console.log('Before = ' + fruits);
    //                 | |
    //                 | |
    // enter code here v v

    console.log('After = ' + fruits);\n` + "</" + "script>",
      themePath: 'ace/theme/monokai'
    }
  },
  mounted() {
    
    // consoleLogDiv();

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
    this.aceEditor.gotoLine(this.lessonStartLine, 4);

    this.consoleDiv = document.querySelector('.console-log-div')


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
    resetLesson() {
      this.aceEditor.session.setValue(this.lessonCode);
      this.aceEditor.gotoLine(this.lessonStartLine);
      console.history = [];
      this.consoleDiv.innerHTML = ''
    },
    insideScriptTags(str, tagStart, tagEnd) {
      return str.slice(tagStart, tagEnd);
    },
    submit() {
      // take code inside ace editor
      // import ('console-log-div/console-log-div.js').then( () => {})
      // consoleLogDiv();

      // clear console Div
      this.consoleDiv.innerHTML = ''
      console.history = [];

      // insert code into iframe div
      let iframe = document.querySelector('.box-iframe');
          iframe.srcdoc = this.aceEditor.getValue();


//  ----------------------------------
      // let getGeneratedPageURL = ({ html, css, js }) => {
      //   let getBlobURL = (code, type) => {
      //     let blob = new Blob([code], { type })
      //     return URL.createObjectURL(blob)
      //   }
//        const cssURL = getBlobURL(css, 'text/css')
//   const jsURL = getBlobURL(js, 'text/javascript')

//   const source = `
//     <html>
//       <head>
//         ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
//         ${js && `<script src="${jsURL}"></scccccccccccCCCCCcccript>`}
//       </head>
//       <body>
//         ${html || ''}
//       </body>
//     </html>
//   `

//   return getBlobURL(source, 'text/html')
// }

// const url = getGeneratedPageURL({
//   html: '<p>Hello, world!</p>',
//   css: 'p { color: blue; }',
//   js: 'console.log("hi")'
// })

// const iframe = document.querySelector('#iframe')
// iframe.src = url
//  ----------------------------------
//  ----------------------------------

      let lessonString = this.aceEditor.getValue();

      let tagStartIndex = lessonString.indexOf('<script>') + 8;
      let tagEndIndex = lessonString.indexOf('</scrip');

      let lessonSession = this.insideScriptTags(lessonString, tagStartIndex, tagEndIndex);

      // function looseJsonParse(obj){
      //     return function() { return obj }();
      // }
      eval(lessonSession)
      // console.log(looseJsonParse(lessonSession))
      for (var i = 0; i < console.history.length; i++) {
          this.consoleDiv.innerHTML += console.history[i].arguments[0] + "<br/>";
      }
      this.consoleDiv.innerHTML += "<hr/>";
      // lessonSession.slice(tagEnd, tagStart)
      // if only one <script>
      // console.log(lessonString.replace(/\s+/g, '').length);
      // console.log(lessonString.replace(/\s+/g, '').length);
      // console.log(JSON.stringify(lessonSession));
      // consoleDiv.innerHTML = JSON.stringify(lessonSession);

      // insert it into iframe
      // import 'console-log-div/console-log-div'
      // () => import('console-log-div/console-log-div.js')
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
  height:80%;
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
.run.reset {
  background-color: #e63636
}
.results-container {
  width: 50%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.console-log-div {
  box-sizing: border-box;
  border: 1px solid gray;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 100%;
  min-height: 200px;
  max-height: 220px;
  height: 20%;
  overflow: scroll;
}
#console-log-text {
  text-align: left;
  max-width: 100% !important;
}
@media screen and (min-width: 667px) {
  .lesson {
    display: flex;
  }
  .code-bg {
    width: 50%;
  }
  .box-iframe {
    width: 100%;
  } 
}
</style>
