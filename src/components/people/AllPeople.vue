<template>
  <div class="container">
    <h3>Personajes</h3>
    <div class="buttonContainer">
      <a role="button" class="btn btn-warning starships">Reset</a>
      <a role="button" class="btn btn-warning" v-on:click="ordenarAltura"
        >Mayor</a
      >
      <a role="button" class="btn btn-warning starships">Menor</a>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th id="name">Nombre del personaje</th>

          <th id="height">Altura</th>

          <th id="link">Enlace</th>
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
        })
        .catch((e) => {
          console.log(e);
        });
    },
    ordenarAltura() {
      function compare(a, b) {
        if (a.height < b.height) return -1;
        if (a.height > b.height) return 1;
        return 0;
      }

      return this.people.sort(compare);
    },
  },
};
</script>

<style scoped>
.buttonContainer {
  margin-bottom: 10px;
  float: right;
}

.buttonContainer > a:nth-child(2) {
  margin-left: 10px;
  margin-right: 10px;
}

table {
  border-radius: 25px;
  background-color: #212529;
  border: 2px yellow solid;
}

p {
  color: yellow;
}
</style>
