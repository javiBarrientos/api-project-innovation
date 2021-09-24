<template>
  <div class="container">
    <h3>Planets</h3>
    <div class="inputContainer">
      <a role="button" class="btn btn-warning" v-on:click="ordernarNombre"
        >Name</a
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
          <th id="name">Planet name</th>

          <th id="link">Link</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="planet in filteredList" v-bind:key="planet">
          <th scope="row">
            {{ planet.name }}
          </th>

          <td>
            <router-link
              :to="{ name: 'planet', params: { id: planet.url } }"
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
import PlanetsDataService from "../../services/planets.service";

export default {
  name: "AllPlanets",
  data() {
    return {
      search: "",
      planets: [],
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      PlanetsDataService.getAll()
        .then((response) => {
          this.planets = response.data.results;
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
      return this.planets.sort(compare);
    },
  },
  computed: {
    filteredList() {
      return this.planets.filter((planet) => {
        return planet.name.toLowerCase().includes(this.search.toLowerCase());
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
  color: black;
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
