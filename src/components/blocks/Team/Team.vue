<template>
  <div>
    <oh2 class="text-center">Octafest team</oh2>
    <GridList width="260px" class="mt-10">
      <Member v-for="member in team" :key="member.photo" :member="member" />
    </GridList>
  </div>
</template>

<script>
import Member from "./Member.vue";

export default {
  name: "Team",
  components: {
    Member,
  },
  data: () => ({
    team: [
      {
        photo: "mykolas",
        name: "Mykolas Mankevicius",
        job: "Co-founder & CTO",
        country: "lithuania",
      },
      {
        photo: "igor",
        name: "Igor Podoprigora",
        job: "Co-founder & CEO",
        country: "lithuania",
      },
      {
        photo: "renatas",
        name: "Renatas Galgatavicius",
        job: "Software engineer",
        country: "lithuania",
      },
      {
        photo: "irina",
        name: "Irina Sagieva",
        job: "Customer success manager",
        country: "spain",
      },
    ],
  }),
};
</script>
