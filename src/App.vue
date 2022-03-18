<template>
  <div id="app">
      <router-view>
      </router-view>
  </div>
</template>

<style>
#app {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
}
</script>