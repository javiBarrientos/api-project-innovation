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
              <p>name: {{ starshipDetails.name }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>model: {{ starshipDetails.model }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>manufacturer: {{ starshipDetails.manufacturer }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>cost in credits: {{ starshipDetails.cost_in_credits }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>length: {{ starshipDetails.length }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                max atmosphering speed:
                {{ starshipDetails.max_atmosphering_speed }}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>passengers: {{ starshipDetails.passengers }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <a role="button" class="btn btn-warning" href="/planets">Back</a>
    </div>
  </div>
</template>

<script>
import StarshipsDataService from "../../services/starships.service";

export default {
  name: "PersonalStarship",
  data() {
    return {
      starshipDetails: {},
    };
  },
  mounted() {
    this.show(this.$route.params.id);
  },
  methods: {
    show(id) {
      StarshipsDataService.getPersonal(id).then((response) => {
        this.starshipDetails = response.data;
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
