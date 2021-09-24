<template>
  <div class="mainContainer">
    <div class="mainContacts">
      <div class="contacts">
        <p>mail@gmail.com</p>
        <p>+34 687 56 23 45</p>
      </div>
      <div class="social">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="mentions">
      <p>2018 | mentions légales</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.mainContainer {
  padding-top: 10px;
  margin-top: 20px;
  color: white;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.mainContacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.contacts {
  text-align: right;
  margin-bottom: 0;
}
.social {
  width: 20%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.social div {
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
}
.mentions p {
  font-size: 0.5em;
}
</style>
