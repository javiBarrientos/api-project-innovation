<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-12 column"
        v-for="(person, key) in people.results"
        :key="key"
      >
        <p>{{ person }}</p>
      </div>
    </div>
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
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
p {
    color: wheat;
}
</style>