<template>
  <custom-section id="skills">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center called-out-heading"><v-icon size="60" class="heading-space">mdi-cogs</v-icon>Skills</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" xl="4" v-for="skill in allSkills" :key="skill.categoryName">
        <dynamic-skills :skillTree="skill" />
      </v-col>
    </v-row>
  </custom-section>
</template>
<script>
import CustomSection from '../components/CustomSection.vue'
import DynamicSkills from '../components/DynamicSkills.vue'

export default {
  components: {
    CustomSection,
    DynamicSkills
  },
  computed: {
    allSkills () {
      return this.$store.state.allSkills
    },
    allSkillsLength () {
      return this.$store.state.allSkills.length
    }
  },
  methods: {
  }
}
</script>
<style scoped>
#skills {
  background-image: url('../assets/skills.jpg');
  color: #FFF;
  background-size: cover;
  padding-bottom: 60px;
}
#skills .v-icon {
  color: #FFF !important;
}
.heading-space {
  padding-right: 20px;
}
</style>
