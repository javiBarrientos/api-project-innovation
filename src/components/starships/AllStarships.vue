<template>
  <div class="container">
    <h3>starships</h3>
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
          <th id="name">Starship name</th>

          <th id="link">Link</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="starship in filteredList" v-bind:key="starship">
          <th scope="row">
            {{ starship.name }}
          </th>

          <td>
            <router-link
              :to="{ name: 'starship', params: { id: starship.url } }"
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
import StarshipsDataService from "../../services/starships.service";

export default {
  name: "AllStarships",
  data() {
    return {
      search: "",
      starships: [],
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      StarshipsDataService.getAll()
        .then((response) => {
          this.starships = response.data.results;
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
      return this.starships.sort(compare);
    },
  },
  computed: {
    filteredList() {
      return this.starships.filter((starship) => {
        return starship.name.toLowerCase().includes(this.search.toLowerCase());
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
