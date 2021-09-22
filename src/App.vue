<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
@import url(https://allfont.es/allfont.css?fonts=star-jedi);

#app {
  background-image: url("./assets/background_3.jpg");
  background-color: #cccccc;
  height: 855px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  color: yellow;
  font-family: "Star Jedi", arial;
  text-align: center;
}

a {
  font-family: "Star Jedi", arial;
}
</style>
