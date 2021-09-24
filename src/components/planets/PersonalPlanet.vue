<template>
  <div>
    <h3>Planet info</h3>
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th id=""></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>name: {{ planetDetails.name }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>rotation period: {{ planetDetails.rotation_period }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>orbital period: {{ planetDetails.orbital_period }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>diameter: {{ planetDetails.diameter }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>climate: {{ planetDetails.climate }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>gravity: {{ planetDetails.gravity }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>terrain: {{ planetDetails.terrain }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <a role="button" class="btn btn-warning" href="/planets">Back</a>
    </div>
  </div>
</template>

<script>
import PlanetsDataService from "../../services/planets.service";

export default {
  name: "PersonalPlanet",
  data() {
    return {
      planetDetails: {},
    };
  },
  mounted() {
    this.show(this.$route.params.id);
  },
  methods: {
    show(id) {
      PlanetsDataService.getPersonal(id).then((response) => {
        this.planetDetails = response.data;
      });
    },
  },
};
</script>

<style scoped>
p {
  color: yellow;
  font-family: "Star Jedi", arial;
  text-align: center;
}
</style>
