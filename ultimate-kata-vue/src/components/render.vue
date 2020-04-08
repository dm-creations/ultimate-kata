<template>
  <div class="render code-bg console-bg">
    <div class="display">
      <h1 class="black-txt">{{ title }}</h1>
      <p>
      </p>
    </div>
    <hr>
    <div class="mini-page">
      <div class="console">
        <p>Console: click "Submit Code" or CMD + S to run the code</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'render',
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
h3 {
  margin: 40px 0 0;
}
hr {
  margin: 0;
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
.display {
  box-sizing: border-box;
  background-color: white;
  height: 120px;
}
.code-bg {
  height: calc(100vh - 105px);
}
.black-txt {
  color: black;
}
.console-bg {
  background-color: #0e1628;
}
.console {
  position: relative;
  height: 100%;
  padding-left: 1em;
  padding-top: 10px;
  text-align: left;
  color: #898989;
}
</style>
