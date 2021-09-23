<template>
  <div>
    <p>
        {{personDetails.name}}
    </p>
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
