<template>
  <footer>
      <p>{{copyright }}</p>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2020'
        }
    }
}
</script>

<style scoped>
footer {
    background: grey;
    padding: 6px;
}
</style>