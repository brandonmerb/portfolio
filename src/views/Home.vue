<template>
  <div class="home">
    <landing-section class="landing" />
    <skills-section />
    <work-history-section />
    <projects-section />
    <contact-section />
  </div>
</template>
<script>
import LandingSection from '../sections/LandingSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import WorkHistorySection from '../sections/WorkHistorySection.vue'

export default {
  components: {
    LandingSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    WorkHistorySection
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
