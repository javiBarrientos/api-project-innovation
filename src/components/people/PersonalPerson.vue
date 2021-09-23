<template>
  <div>
    <h3>Personal info</h3>
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
              <p>Nombre: {{ personDetails.name }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Altura: {{ personDetails.height }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Color de pelo: {{ personDetails.hair_color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Color de piel: {{ personDetails.skin_color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Color de ojos: {{ personDetails.eye_color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Año de nacimiento: {{ personDetails.birth_year }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Genero: {{ personDetails.gender }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <a role="button" class="btn btn-warning" href="/people">Back</a>
    </div>
  </div>
</template>

<script>
import PeopleDataService from "../../services/people.service";

export default {
  name: "PersonalPerson",
  data() {
    return {
      personDetails: {},
    };
  },
  mounted() {
    this.show(this.$route.params.id);
  },
  methods: {
    show(id) {
      PeopleDataService.getPersonal(id).then((response) => {
        this.personDetails = response.data;
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
