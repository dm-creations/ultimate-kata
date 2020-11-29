<template>
  <div class="lesson">
    <div class="code-bg">
      <div class="prompt">
        <h1 class="white-txt">{{ title }}</h1>
        <h2 class="white-txt">
          Create two <span class="tag-name">&lt;div&gt;</span> elements with the class names: <span class="string">"{{testClasses[1].substring(1)}}"</span> and <span class="string">"{{testClasses[2].substring(1)}}"</span>
        </h2>
        <h2 class="white-txt">
          (In that order: logo, menu)
        </h2>
      </div>
      <div class="visual-tip">
      </div>
      <div class="attempt">
        <div class="greyed-out">
          <!-- to be imported qBoilerplate -->
          <p><span class="doctype">&lt;!DOCTYPE html&gt;</span></p>
          <p><span class="tag-name">&lt;html <span class="attribute">lang</span>="<span class="string">en</span>"></span></p>
          <p><span class="tag-name">&lt;head></span></p>
          <p><span class="tag-name">&lt;title></span>A quick website<span class="tag-name">&lt;/title></span></p>
          <p><span class="tag-name">&lt;/head></span></p>
          <p><span class="tag-name">&lt;body></span></p>
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
        <p><span class="tag-name">&lt;/body></span></p>
        <p><span class="tag-name">&lt;/html></span></p>
      </div>
      <div v-on:click="resetLesson" class="run reset">Reload</div><!-- cute reload gun or resheath animation -->
      <div v-on:click="blobber" class="run test">Run Code</div>
      <div v-on:click="submit" class="run">Submit Code</div>
    </div>
    <div class="results-container">
        <div class="test-results" v-if="congratsMessage"> {{ this.congratsMessage }} </div>
        <div class="successes" v-for="success in messages.success" :key="success"> {{ success }} </div>
        <div class="fails" v-for="fail in messages.fail" :key="fail"> {{ fail }} </div>
      <iframe id="ifrm" class="box-iframe"></iframe> 
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
  name: 'lesson021d',
  data() {
    return {
      title: 'Lesson 21d - Populate the Header',
      value: 'We jog',
      language: 'ace/mode/html',
      lessonStartLine: 9,
      lessonSession: '',
      iframeLoaded: false,
      congratsMessage: null,
      messages: {success:[],fail:''},
      preLessonCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>A quick website</title>\n</head>\n<body>`,
      lessonCode: `<!--                 | |  -->
<!--                 | |  -->
<!-- enter code here v v  -->
`,
      postLessonCode: "\n</body>\n</html>",
      themePath: 'ace/theme/monokai',
      progress: '',
      user: {
        id: 'Free User variable',
        lessonComplete: false,
        srsInfo: null
      },
      nextLessontimer: 3000,
      testClasses: {
        1 : '.logo',
        2 : '.menu'
      }
    }
  },
  beforeMount() {
    
  },
  mounted() {
    
    // consoleLogDiv();

    // this.$emit('created', this.lessonCode, this.language);

    // UI should explain in less than one second: Enter Code Here. Red box cascading focus around ace editor text area.

    // console.log();
    this.aceEditor = this.$ace.edit('editor', {
        maxLines: 60,
        fontSize: 16,
        theme: this.themePath,
        mode: this.language,
        tabSize: 4
        }
      );
    // load progress from previous lesson into read only section
    
    // lesson21State exists? add to variable as String
    if (localStorage.getItem('lesson21cState')) {
      this.progress = localStorage.getItem('lesson21cState');

      let newDiv = document.createElement('div');
      let preDiv = document.querySelectorAll('div.greyed-out')[0];
      // turn into html
      newDiv.innerText = this.progress;
      preDiv.insertAdjacentElement('beforeend', newDiv)
     }
    // insert into div.greyed-out
    // insert into preLessonCode
    // Lesson 21b code exists? use it, else: get this.lessonCode
    localStorage.getItem('lesson21cState') ? (this.aceEditor.session.setValue(localStorage.getItem('lesson21cState'))) : this.aceEditor.session.setValue(this.lessonCode);
    this.aceEditor.gotoLine(this.lessonStartLine, 4);

    this.consoleDiv = document.querySelector('.console-log-div');
    this.modal = document.querySelector('.modal');


// beforeCreate
// created --> called earlier in order to trigger actions like data fetching from API backend
// beforeMount
// mounted
// beforeUpdate, 
// updated 
// beforeDestroy
// destroyed
  },
  computed: {

  },
  methods: {
    frameloaded() {
        let iframe = document.querySelector('.box-iframe');
    
        let testEl1 = (cssClass) => iframe.contentDocument.querySelector(cssClass);
        
        // For the checks, create an array of messages to output after different test cases are run
        // Maybe each item should be an object with success or fail as a type
        let messages = {success: [],fail: []};
        let check1 = [];
        let check2 = iframe.contentDocument.querySelector('.nav-content').children.length > 0;

        let elcheck1 = (el,txt = 'class') => {
          // testEl1('.logo') or testEl1(this.testClasses[1],this.testClasses[1] or '.logo')
          //check is an element?
          if (typeof(el) != 'undefined' && el != null) {
            // check element has the lesson's className
            messages.success.push(el.className + ' element exists')
            check1.push(true) 
          } else {
            // if check-is-an element fails, which element were we testing for? Check this.testClasses object
            messages.fail.push(txt + " element not created yet");
            check1.push(false);
          }
        }

        // let elcheck2 = (el1,el2) => {
        //   // checks if they are valid elements
        //   el1 = (typeof(el1) != 'undefined' && el1 != null) ? true : false;
        //   el2 = (typeof(el2) != 'undefined' && el2 != null) ? true : false;
          
        //   console.log("elcheck2 ---> " + el1 + " " + el2)
        //   check2 = ((el1 && el2 == true) ? true : false)
        //   console.log('check 2 = ' + check2)
        // }

        let elcheck3 = (el1,el2) => {
          // Are elements in the right order?
          // Is testClass 1 before testClass 2?

          // function what number am I? what number is other element? parent.children array check == ? return my number
          // function compare number of next element
          if ( (check1[0] && check1[1]) == false ) { 
            console.log('the checks:')
            console.log(check1[0])
            console.log(check1[1])
            console.log(check2)
            
            return 
          }
          let elArray = Array.from(iframe.contentDocument.querySelector('.nav-content').children);
          let firstIndex = el1;
          let secondIndex = el2;
          
          console.log(elArray);
          console.log(el2);

          function whatIndex(input) {
            for (var i=0; i < elArray.length; i++){
              if (elArray[i] == input){
                input = i;
                console.log(input + ' Index = ' + i)
                return input;
              }
            }
          }

          firstIndex = whatIndex(el1);
          secondIndex = whatIndex(el2);
          
          console.log('first Index ==' + firstIndex)
          console.log('second Index ==' + secondIndex)

          if (firstIndex < secondIndex){
            messages.success.push('.logo and .menu elements are in the right order')
          } else {
            messages.fail.push('.logo and .menu elements seem to be in the wrong order or wrong place or have the wrong parent')
          }
        }

        elcheck1(testEl1(this.testClasses[1]),this.testClasses[1]);
        elcheck1(testEl1(this.testClasses[2]),this.testClasses[2]);
        // elcheck2(testEl1(this.testClasses[1]),testEl1(this.testClasses[2]) );
        elcheck3(testEl1(this.testClasses[1]),testEl1(this.testClasses[2]));

          // Extra checks to run:
          // did you spell logo right? If elements exist do a regex on the 
          // did you spell menu right?
          // are there the right amounts of each elements?
        console.log(messages)
        this.messages = {};
        
         if (messages.success.length == 3 && messages.fail.length == 0) {
          // this.congratsMessage = "Good Job - Looks good!"
            this.messages = messages;
            this.congratsMessage = 'Well done! Submit it!'
        } if (messages.success.length < 3 && messages.fail.length >= 0) {
            this.messages = messages;
            this.congratsMessage = 'Getting there...'
        } if (messages.success.length == 0 & messages.fail.length > 1) {
            this.congratsMessage = 'Not quite'
        }

    },
    frameSubmit() {        
        let iframe = document.querySelector('.box-iframe');
        let testEl1 = (cssClass) => iframe.contentDocument.querySelector(cssClass);
        let messages = {success: [],fail: []};
        let check1 = [];
        // let check2 = iframe.contentDocument.querySelector('.nav-content').children.length > 0;

        let elcheck1 = (el,txt = 'class') => {
          if (typeof(el) != 'undefined' && el != null) {
            messages.success.push(el.className + ' element exists')
            check1.push(true) 
          } else {
            messages.fail.push(txt + " element not created yet");
            check1.push(false);
          }
        }

        let elcheck3 = (el1,el2) => {
          if ( (check1[0] && check1[1]) == false ) { 
            console.log('the checks:');
            return 
          }
          let elArray = Array.from(iframe.contentDocument.querySelector('.nav-content').children);
          let firstIndex = el1;
          let secondIndex = el2;
          
          function whatIndex(input) {
            for (var i=0; i < elArray.length; i++){
              if (elArray[i] == input){
                input = i;
                return input;
              }
            }
          }

          firstIndex = whatIndex(el1);
          secondIndex = whatIndex(el2);
          
          if (firstIndex < secondIndex){
            messages.success.push('.logo and .menu elements are in the right order')
          } else {
            messages.fail.push('.logo and .menu elements seem to be in the wrong order or wrong place or have the wrong parent')
          }
        }

        elcheck1(testEl1(this.testClasses[1]),this.testClasses[1]);
        elcheck1(testEl1(this.testClasses[2]),this.testClasses[2]);
        elcheck3(testEl1(this.testClasses[1]),testEl1(this.testClasses[2]));

        this.messages = {};
        
         if (messages.success.length == 3 && messages.fail.length == 0) {
            this.congratsMessage = 'Well done!';
            this.user.lessonComplete = true;
            this.modal.style.display = 'block';
            this.saveLesson();
        } if (messages.success.length < 3 && messages.fail.length >= 0) {
            this.messages = messages;
            this.congratsMessage = 'Getting there...'
        } if (messages.success.length == 0 & messages.fail.length > 1) {
            this.messages = messages;
            this.congratsMessage = 'Not quite'
        } 
    },
    resetLesson() {
      this.aceEditor.session.setValue(this.lessonCode);
      this.aceEditor.gotoLine(this.lessonStartLine);
      console.history = [];
      this.consoleDiv.innerHTML = ''
    },
    insideScriptTags(str, tagStart, tagEnd) {
      return str.slice(tagStart, tagEnd);
    },
    submitter() {
      let lessonString = this.aceEditor.getValue();
      let fullLessonString = this.preLessonCode + this.progress + lessonString + this.postLessonCode;
      let blobberhtml = new Blob([fullLessonString], { type: 'text/html' });
      let iframe = document.querySelector('.box-iframe');
      iframe.src = URL.createObjectURL(blobberhtml);
    },
    blobber() {
      let lessonString = this.aceEditor.getValue();
      this.consoleDiv.innerHTML = ''
      console.history = [];

      let fullLessonString = this.preLessonCode + lessonString + this.postLessonCode;
      
      let blobberhtml = new Blob([fullLessonString], { type: 'text/html' });
      let iframe = document.querySelector('.box-iframe');
      iframe.src = URL.createObjectURL(blobberhtml);

      // URL.revokeObjectURL(objectURL) when no longer needed

      this.consoleDiv.innerHTML += "<hr/>";

      iframe.addEventListener('load', this.frameloaded );

    //   let doc = iframe.contentDocument;
    //   let docco = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;

    //   let doccoNavvo = iframe.contentDocument.location;

      for (var i = 0; i < console.history.length; i++) {
          this.consoleDiv.innerHTML += console.history[i].arguments[0] + "<br/>";
      }
    // iframe.removeEventListener('load', this.frameloaded );
    },
    nexx() {
        this.$router.push('/lesson-21d');
    },
    NextLesson() {
      console.log('go to next Lesson');
    },
    saveLesson() {
      let lessonString = this.aceEditor.getValue();
      localStorage.setItem('lesson21cState', lessonString)
    },
    submit() {
      // clear console Div
      this.consoleDiv.innerHTML = ''
      console.history = [];

      let lessonString = this.aceEditor.getValue();


      // insert code into iframe div
      let iframe = document.querySelector('.box-iframe');
      let blobber1 = new Blob([lessonString], { type: 'text/html' });
      iframe.src = URL.createObjectURL(blobber1);


    //   probably should replace this with more Vue friendly code
      iframe.addEventListener('load', this.frameSubmit );

    //   put safety net checks here vv for if they create any script tags and put code inside
    
    //   let tagStartIndex = lessonString.indexOf('<script>') + 8;
    //   let tagEndIndex = lessonString.indexOf('</scrip');
    //   let lessonCode = this.insideScriptTags(lessonString, tagStartIndex, tagEndIndex);
    //   const func = new Function(lessonCode);
    //   let x = func();

    //   if (x[3] == 'Orange') {
    //       this.congratsMessage = 'Congrats';
    //       this.user.lessonComplete = true;
    //       this.modal.style.display = 'block';
    //       this.saveLesson();

    //   } else {
    //       this.congratsMessage = 'Fail';
    //   }

        /*eslint-disable */

        /*eslint-enable */

      for (var i = 0; i < console.history.length; i++) {
          this.consoleDiv.innerHTML += console.history[i].arguments[0] + "<br/>";
      }
      this.consoleDiv.innerHTML += "<hr/>";

    // iframe.removeEventListener('load', this.frameloaded );

    }
  },
  watch: {
    congratsMessage: function(val, oldVal) {
      console.log('%c' + oldVal + ' ==> ' + val, 'color: yellow')
    }
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
.tag-name {
    color: #5db0d7;
}
.attribute {
    color: #9bbbdc;
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
.successes {
  color: green;
}
.fails {
  color: orange;
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
