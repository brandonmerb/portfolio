<template>
  <custom-section fill-height id="home">
    <div class="intro">
      <div>
        Hello, my name is <span :class="{'name': true, 'name-new-line': $vuetify.breakpoint.smAndDown}">Brandon Erb</span>
        <span class="description">I'm a <dynamic-words :words="words" />.</span>
        <div class="d-flex justify-center pt-3">
          <v-btn @click="$vuetify.goTo('#skills')"> Learn more <v-icon>mdi-arrow-right</v-icon> </v-btn>
        </div>
      </div>
    </div>
  </custom-section>
</template>
<script>
import CustomSection from '../components/CustomSection.vue'
import DynamicWords from '../components/DynamicWords.vue'

export default {
  components: {
    CustomSection,
    DynamicWords
  },
  data () {
    return {
      words: [
        'Senior software engineer',
        'Full-stack web developer',
        'Frontend developer',
        'Backend developer',
        'Code ninja',
        'Programmer',
        'Web developer'
      ]
    }
  }
}
</script>
<style scoped>
.intro {
  font-size: 40px;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
}
.intro .name {
  color: #f32fe3;
  font-weight: 500;
  -webkit-text-stroke: 1px #000;
}
.landing {
  background-image: url("../assets/landing_image.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
.name-new-line {
  display: block;
}
.description {
  display: block;
}
</style>
