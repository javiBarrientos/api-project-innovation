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
              <p>Name: {{ personDetails.name }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Height: {{ personDetails.height }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Hair color: {{ personDetails.hair_color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Skin color: {{ personDetails.skin_color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Eyes color: {{ personDetails.eye_color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Year of birth: {{ personDetails.birth_year }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Gender: {{ personDetails.gender }}</p>
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
  name: "PersonalCharacter",
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
