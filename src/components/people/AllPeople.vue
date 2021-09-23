<template>
  <div class="container">
    <h3>Personajes</h3>
    <div class="inputContainer">
      <a role="button" class="btn btn-warning" v-on:click="ordernarNombre"
        >Nombre</a
      >
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

          <th id="link">Enlace</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="person in filteredList" v-bind:key="person">
          <th scope="row">
            {{ person.name }}
          </th>

          <td>
            <router-link
              :to="{ name: 'personal', params: { id: person.url } }"
              class="buttonLink"
              >info</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <a role="button" class="btn btn-warning" href="/">Back</a>
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
    ordernarNombre() {
      function compare(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      return this.people.sort(compare);
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
  display: flex;
}

.inputContainer > a {
  margin-right: 10px;
}

.form-control {
  border-radius: 30px;
}

table {
  border-radius: 25px;
  background-color: #212529;
  border: 2px yellow solid;
}

.buttonLink {
  background-color: #ffc107;
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  border-radius: 25px;
}

.buttonLink:hover {
  background-color: #ebd50e;
}

p {
  color: yellow;
}
</style>
