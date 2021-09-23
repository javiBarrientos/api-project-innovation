<template>
  <div class="container">
    <h3>Personajes</h3>
    <div class="inputContainer">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
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
        <tr v-for="person in filteredList" v-bind:key="person">
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
      search: "",
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
          this.people = response.data.results;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    filteredList() {
      return this.people.filter((person) => {
        return person.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.inputContainer {
  margin-bottom: 10px;
  float: right;
}

.form-control {
  border-radius: 30px;
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
