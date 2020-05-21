<template>
    <header>
        <div class="logo">
            <img alt="Vue logo" src="../assets/logo-u.png">
            <span>
                <h1>ltimate Code Kata</h1>
            </span>
        </div>
        <button to="./lesson002.vue">To Lesson 2</button>
        <span class="header-items">
            <p>How it Works</p>
        </span>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
      header { 
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        padding: 0 15px 5px 15px;
        border-bottom-style: solid;
        border-bottom-color: black;
        border-bottom-width: 1px;
        }
      .logo > img, .logo span { 
        display: inline-block;
        height: 80px;
        vertical-align: bottom;
        }
      .header-items {
        align-self: center;
        width: 50%;
        margin-left: auto;
      }
      .header-items p {
        margin-top: 0;
        text-align: right;
      }
</style>
