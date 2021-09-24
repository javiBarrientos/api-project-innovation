<template>
  <div class="mainContainer">
    <h1>Star Wars Database</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 column">
          <a href="/people" role="button" class="btn btn-default people"
            >People</a
          >
        </div>
        <div class="col-sm-12 column">
          <a href="/starships" role="button" class="btn btn-default starships"
            >Starships</a
          >
        </div>
        <div class="col-sm12 column">
          <a href="/planets" role="button" class="btn btn-default planets"
            >Planets</a
          >
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

.column a {
  width: 100%;
  height: 100%;
  border: 2px solid yellow;
  border-radius: 25px;
  color: yellow;
}

.people {
  background-image: url("../../assets/people.jpg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.starships {
  background-image: url("../../assets/starships.jpeg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.planets {
  background-image: url("../../assets/planets.jpg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
