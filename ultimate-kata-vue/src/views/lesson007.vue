<template>
  <div class="lesson">
    <div class="code-bg">
      <div class="prompt">
        <h1 class="white-txt">{{ title }}</h1>
        <h2 class="white-txt">
          Merge or <span class="string">'concatenate'</span> the <span class="string">'TWO ARRAYS'</span> into <span class="string">'ONE </span>array
        </h2>
        <h2 class="white-txt">
            Call the array <span class="string">'bothParts'</span>
        </h2>
      </div>
      <div class="visual-tip">
      </div>
      <div class="attempt">
        <div class="greyed-out">
          <!-- to be imported qBoilerplate -->
          <p><span class="func">let</span> <span class="vari">part1 </span>= [<span class="string">'Melissa'</span>, <span class="string">'Sally'</span>, <span class="string">'Vera'</span>];</p>
          <p>
            <span class="func">let</span> <span class="vari">part2 </span>= [<span class="string">'Benjamin'</span>, <span class="string">'Thomas'</span>, <span class="string">'William'</span>];
          </p>
          <p><span class="func">let</span> <span class="vari">bothParts </span>= [];</p>
          <br />
        </div>
        <!-- end of import qBoilerplate -->
        <hr /><hr />
      </div>
      <div class="code-sandbox">
        <div id="editor" class="">Code Loading...</div>
      </div>
      <hr /><hr />
      <div class="greyed-out">
        <p>console.<span class="method">log</span>(<span class="string">'part1 = '</span> <span class="operator">+ </span><span class="vari">part1</span> );</p>
        <p>console.<span class="method">log</span>(<span class="string">'part2 = '</span> <span class="operator">+ </span><span class="vari">part2</span> );</p>
        <p>console.<span class="method">log</span>(<span class="string">'bothParts = '</span> <span class="operator">+ </span><span class="vari">bothParts</span> );</p>
      </div>
      <div v-on:click="resetLesson" class="run reset">Reload</div><!-- cute reload gun or resheath animation -->
      <div v-on:click="blobber" class="run test">Run Code</div>
      <div v-on:click="submit" class="run">Submit Code</div>
    </div>
    <div class="results-container">
        <div v-if="congratsMessage"> {{ this.congratsMessage }} </div>
      <iframe class="box-iframe"></iframe>
      <div id="console-log-div" class="console-log-div"></div>
    </div>
    <div class="modal">
      <div class="message-box">
        <h2 class="message-title">Nice one!</h2>
        <span v-on:click="nexx" class="next run">Next Lesson in:
          <span id="countdown" class="countdown">{{ nextLessontimer / 1000 }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import 'console.history'

export default {
  name: 'lesson007',
  data() {
    return {
      title: 'Lesson 7',
      value: 'We jog',
      language: 'ace/mode/javascript',
      lessonStartLine: 4,
      lessonSession: '',
      congratsMessage: null,
      preLessonCode: `let part1 = ['Melissa', 'Sally', 'Vera'];\nlet part2 = ['Benjamin', 'Thomas', 'William'];\nlet bothParts = [];\n`,
      lessonCode: `//                 | |\n//                 | |\n// enter code here v v\n`,
      postLessonCode: "\nconsole.log('part1 = ' + part1 );\nconsole.log('part2 = ' + part2 );\nconsole.log('bothParts = ' + bothParts );\n",
      themePath: 'ace/theme/monokai',
      user: {
        id: 'Free User variable',
        lessonComplete: false,
        srsInfo: null
      },
      nextLessontimer: 3000
    }
  },
  mounted() {
    this.aceEditor = this.$ace.edit('editor', {
        maxLines: 60,
        fontSize: 16,
        theme: this.themePath,
        mode: this.language,
        tabSize: 4
        }
      );
    localStorage.getItem('lesson7State') ? (this.aceEditor.session.setValue(localStorage.getItem('lesson7State'))) : this.aceEditor.session.setValue(this.lessonCode);
    this.aceEditor.gotoLine(this.lessonStartLine, 1);

    this.consoleDiv = document.querySelector('.console-log-div');
    this.modal = document.querySelector('.modal');

  },
  methods: {
    blobber() {
      this.consoleDiv.innerHTML = ''
      console.history = [];

      let lessonString = this.aceEditor.getValue();
      let fullLessonString = this.preLessonCode + lessonString + this.postLessonCode;
      
      let blobberjs = new Blob([fullLessonString], { type: 'text/javascript' });
      let blobberjsLink = URL.createObjectURL(blobberjs);
      let blobberhtml = new Blob(['<script src="',blobberjsLink,'">','</scr','ipt>'], { type: 'text/html' });
      let iframe = document.querySelector('.box-iframe');
      iframe.src = URL.createObjectURL(blobberhtml);
      // URL.revokeObjectURL(objectURL) when no longer needed like when going to next lesson

      const tryIt = new Function(this.preLessonCode + lessonString + this.postLessonCode + 'return bothParts;' );
      let x = tryIt();

      if (x[0] == 'Melissa' && x[x.length -1] == 'William') {
        this.congratsMessage = 'Should Work';
      }

      for (var i = 0; i < console.history.length; i++) {
          this.consoleDiv.innerHTML += console.history[i].arguments[0] + "<br/>";
      }
      this.consoleDiv.innerHTML += "<hr/>";
    },
    insideScriptTags(str, tagStart, tagEnd) {
      return str.slice(tagStart, tagEnd);
    },
    NextLesson() {
      console.log('go to next Lesson');
    },
    nexx() {
        this.$router.push('/lesson-8');
    },
    resetLesson() {
      this.aceEditor.session.setValue(this.lessonCode);
      this.aceEditor.gotoLine(this.lessonStartLine);
      console.history = [];
      this.consoleDiv.innerHTML = ''
    },
    saveLesson() {
      // todo: add "saving lesson" quick animation
      let lessonString = this.aceEditor.getValue();
      localStorage.setItem('lesson7State', lessonString)
    },
    submit() {

      // clear console Div
      this.consoleDiv.innerHTML = ''
      console.history = [];

      let lessonString = this.aceEditor.getValue();
      let fullLessonString = this.preLessonCode + lessonString + this.postLessonCode;

      // insert code into iframe div
      let iframe = document.querySelector('.box-iframe');
      let blobber1 = new Blob([fullLessonString], { type: 'text/javascript' });

      iframe.src = URL.createObjectURL(blobber1);


      const func = new Function(this.preLessonCode + lessonString + this.postLessonCode +'return bothParts;' );
      let x = func();

      if (x[0] == 'Melissa' && x[x.length -1] == 'William') {
            this.congratsMessage = 'Congrats';
            this.user.lessonComplete = true;
            this.modal.style.display = 'block';
            this.saveLesson();

        } else {
            this.congratsMessage = 'Fail';
        }

      for (var i = 0; i < console.history.length; i++) {
          this.consoleDiv.innerHTML += console.history[i].arguments[0] + "<br/>";
      }
      this.consoleDiv.innerHTML += "<hr/>";

//  ----------------------------------
//  ----------------------------------
    }
  },
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
  height: auto;
  border-bottom: solid 1px white;
}
.white-txt {
  color: white;
}
.greyed-out {
  font-family: 'Menlo';
  width: 80%;
  color: white;
  margin-left: 48px;
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
  min-height: 300px;
  max-height: 300px;
  margin-left: auto;
  text-align: left;
  overflow: scroll;
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
.run.test {
  background-color: aqua;
}
.run.reset {
  background-color: #e63636;
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
.modal {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000005F;
  height: 100vh;
  width: 100%;
}
.message-box {
  position: absolute;
  background-color: white;
  padding: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.message-box > h2 {
  margin-bottom: 50px;
}
.next {
  padding: 17px;
}
.message-box .countdown {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  vertical-align: middle;
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
