<template>
  <div class="question code-bg">
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
      <div class="sandbox">
        <p class="comment">// Your code here &darr;</p>
        <p class="cursor"></p>
      </div>
      <hr /><hr />
      <div class="greyed-out">
        <p>console.<span class="method">log</span>(<span class="string">'After = ['</span> <span class="operator">+ </span><span class="vari">fruits</span><span class="operator"> + </span><span class="string">']'</span>)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
p {
  margin: 2px 0;
}
.code-bg {
  background-color: #212121; /* ideally {{code-bg}} */
  height: calc(100vh - 105px);
}
.prompt {
  padding: 10px 0;
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
.sandbox {
  width: 80%;
  min-height: 400px;
  overflow: hidden;
  margin-left: auto;
  text-align: left;
  overflow: hidden;
}
.comment {
  color: #747474;
}
.cursor {
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
</style>
