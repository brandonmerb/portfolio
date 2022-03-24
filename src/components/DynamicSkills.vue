<template>
  <div>
    <h1 class="skill-heading">
      <span>
        {{skillCategoryName}}
      </span>
    </h1>
    <div class="skill-glance" v-show="collapsed">
      <v-img v-for="skill in skillsInCategory" :key="skill.name" :src="skill.icon"  height="70" width="70" class="d-inline shrink"/>
    </div>
    <h1 class="skill-subtitle" @click="collapsed = !collapsed" v-show="collapsed">
      <div>
        Show details
      </div>
      <div>
        <v-icon>mdi-arrow-down</v-icon>
      </div>
    </h1>
    <v-scale-transition>
      <div class="skill-box" v-show="!collapsed">
        <v-row v-for="skill in skillsInCategory" :key="skill.name" class="inner-skill-row">
          <v-col cols="3">
            <v-img :src="skill.icon" height="70" width="70" class="padded-image"/>
          </v-col>
          <v-col cols="7">
            <div class="skill-title">
              {{skill.name}} - {{skill.yearsExperience}} years
            </div>
            <div class="skill-body">
              {{skill.description}}
            </div>
          </v-col>
          <v-col cols="2">
            <div class="custom-card-button" @click="filter(skill)">
              <v-icon>
                mdi-arrow-right
              </v-icon>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-scale-transition>
    <h1 class="skill-subtitle" @click="collapsed = !collapsed" v-show="!collapsed">
      <div>
        hide details
      </div>
      <div>
        <v-icon>mdi-arrow-up</v-icon>
      </div>
    </h1>
  </div>
</template>
<script>
import goTo from 'vuetify/lib/services/goto'

export default {
  name: 'DynamicSkills',
  computed: {
    skillCategoryName () {
      return this.skillTree.categoryName
    },
    skillsInCategory () {
      return this.skillTree.skills
    }
  },
  data () {
    return {
      collapsed: true
    }
  },
  props: {
    skillTree: {
      type: Object,
      required: true
    }
  },
  methods: {
    filter (item) {
      goTo('#projects')
      if (item.type === 'language') {
        this.$store.commit('setLanguageTags', [item.target])
      } else if (item.type === 'framework') {
        this.$store.commit('setFrameworkTags', [item.target])
      } else if (item.type === 'concept') {
        this.$store.commit('setConceptTags', [item.target])
      }
    }
  }
}
</script>
<style scoped>
.skill-heading {
  display: flex;
  justify-content: center;
}
.skill-heading span {
  padding: 10px;
  border-bottom: 1px solid #CCC;
}
h1.skill-subtitle {
  font-size: 20px;
  text-align: center;
}
h1.skill-subtitle:hover {
  cursor: pointer;
}
.skill-box {
  padding: 10px;
  padding-top: 25px;
}
.experience {
  text-align: center;
}
.experience-number {
  font-size: 60px;
  padding-top: 10px;
}
.experience-years {
  padding-top: 20px;
  font-size: 24px;
  text-transform: uppercase;
}

.inner-skill-row {
  border: 1px solid #CCC;
  margin: 10px;
  background-color: #FFF;
  color: #333;
}

.skill-title {
  font-size: 28px;
}

.custom-card-button {
  border-left: 1px solid #ccc;
  height: 100%;
  display: flex;
  justify-content: center;
}
.custom-card-button:hover {
  background-color: #1976d2;
  color: #fff;
  cursor: pointer;
}
.custom-card-button i {
  color: inherit !important;
}

.padded-image {
  padding: 10px;
}

.skill-glance {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.skill-glance .v-image {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
