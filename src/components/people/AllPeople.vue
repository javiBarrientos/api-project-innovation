<template>
  <div class="container">
    <h3>Personajes</h3>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>Nombre del personaje</th>

          <th>Altura</th>

          <th>Enlace</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(person, key) in people.results" :key="key">
          <th scope="row">
            {{ person.name }}
          </th>

          <td>
            {{ person.height }}
          </td>

          <td>
            <a href="#" role="button" class="btn btn-warning starships">info</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PeopleDataService from "../../services/people.service";

export default {
  name: "AllPeople",
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      PeopleDataService.getAll()
        .then((response) => {
          this.people = response.data;
          console.log(response.data.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
table {
  border-radius: 25px;
  background-color: #212529;
  border: 2px yellow solid;
}

p {
  color: yellow;
}
</style>
