<template>
  <div class="mainContainer">
    <h1>Star Wars Database</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 column">
          <button type="button" class="btn btn-default">Primary</button>
        </div>
        <div class="col-sm-12 column">
          <button type="button" class="btn btn-default">Primary</button>
        </div>
        <div class="col-sm12 column">
          <button type="button" class="btn btn-default">Primary</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Boxes",
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  text-align: center;
}

.row {
  height: 300px;
}

.column:nth-child(2) {
  margin-top: 10px;
  margin-bottom: 10px;
}

.column button {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 25px;
}
</style>
