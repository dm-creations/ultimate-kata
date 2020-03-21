<template>
  <div :class="[mainClass, background]">
    <h1 :class="h1Text">{{ title }}</h1>
    <p>
    </p>
    </div>
</template>

<script>
export default {
  name: 'question',
  props: {
    title: String
  },
  data() {
    return {
      mainClass: 'question',
      background: 'code-bg',
      h1Text: 'white-txt',
    }
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
  background-color: #212121; /* ideally {{code-bg}} */
  height: calc(100vh - 105px);
}
.white-txt {
  color: white;
}
</style>
