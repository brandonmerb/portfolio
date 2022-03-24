<template>
  <custom-section fill-height id="projects">
    <v-row>
      <v-col cols="12">
        <h1 class="called-out-heading text-center">
          <v-icon size="60" class="heading-space">mdi-clipboard-outline</v-icon>Note-worthy projects
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row dense>
              <v-col cols="12">
                <v-text-field v-model="projectSearch" placeholder="Search projects titles/purposes/descriptions for keywords" append-outer-icon="mdi-filter" @click:append-outer="showFilters = !showFilters"/>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <h5 class="d-inline">Contains:</h5>
                <v-chip color="red" text-color="white" v-for="projectType in tags.projectType" :key="projectType">
                  {{projectType}} project
                </v-chip>
                <v-chip v-for="language in tags.language" :key="language" color="primary">
                  {{language}}
                </v-chip>
                <v-chip v-for="framework in tags.framework" :key="framework" color="green" text-color="white">
                  {{framework}}
                </v-chip>
              </v-col>
            </v-row>
            <v-row dense v-show="showFilters">
              <v-col cols="12" md="4">
                <h5>
                  Project Types
                </h5>
                <v-checkbox label="Personal" value="Personal" dense v-model="tagProjectTypes" hide-details />
                <v-checkbox label="Professional" value="Professional" dense v-model="tagProjectTypes" hide-details />
              </v-col>
              <v-col cols="12" md="4">
                <h5>
                  Languages
                </h5>
                <v-checkbox :label="language.name" :value="language.name" v-for="language in languages" :key="language.id" dense v-model="tagLanguages" hide-details />
              </v-col>
              <v-col cols="12" md="4">
                <h5>
                  Frameworks
                </h5>
                <v-checkbox :label="framework.name" :value="framework.name" v-for="framework in frameworks" :key="framework.id" dense v-model="tagFrameworks" hide-details />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="filteredProjects.length > 0">
      <v-col lg="6" cols="12" v-for="project in filteredProjects" :key="project.name">
        <v-card class="d-flex flex-column large-card">
          <v-card-title class="flex-column align-start">
            <h2>
              {{project.name}}
            </h2>
            <h6>
              {{project.purpose}}
            </h6>
          </v-card-title>
          <v-card-text class="grow">
            <div class="chip-container">
              <v-chip color="red" text-color="white">
                {{project.type}} project
              </v-chip>
              <v-chip v-for="(language, index) in project.languages" :key="index" color="primary">
                {{techs.languages[language.id].name}}
              </v-chip>
              <v-chip v-for="framework in project.frameworks" :key="framework.name" color="green" text-color="white">
                {{framework.name}}
              </v-chip>
            </div>
            <div class="mt-3" v-html="project.description">
            </div>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-btn v-if="project.github != null" class="ma-1" :href="project.github">
                  Github
                  <v-icon>
                    mdi-github
                  </v-icon>
                </v-btn>
                <v-btn v-if="project.hosted != null" class="ma-1" :href="project.hosted">
                  View Project
                  <v-icon>
                    mdi-link
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>Oh no!</h2>
          </v-card-title>
          <v-card-text>
            Your search returned no results. Change your parameters and try again!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </custom-section>
</template>
<script>
import CustomSection from '../components/CustomSection.vue'
import techs from '../store/dataSeed/techs'

export default {
  components: {
    CustomSection
  },
  computed: {
    projects () {
      return this.$store.state.allProjects
    },
    filteredProjects () {
      let projects = this.$store.state.allProjects

      // Filter by text first, if any
      if (this.projectSearch != null && this.projectSearch.length > 0) {
        projects = projects.filter((project) => {
          return project.name.toLowerCase().includes(this.projectSearch.toLowerCase()) || project.description.toLowerCase().includes(this.projectSearch.toLowerCase()) || project.purpose.toLowerCase().includes(this.projectSearch.toLowerCase())
        })
      }

      // Then by project type
      if (this.tags.projectType.length > 0) {
        projects = projects.filter((project) => this.tags.projectType.includes(project.type))
      }

      // Then by language
      if (this.tags.language.length > 0) {
        projects = projects.filter((project) => {
          let retVal = false
          project.languages.forEach((lang) => {
            if (this.tags.language.includes(lang.name)) retVal = true
          })
          return retVal
        })
      }

      // Then by framework
      if (this.tags.framework.length > 0) {
        projects = projects.filter((project) => {
          let retVal = false
          project.frameworks.forEach((framework) => {
            if (this.tags.framework.includes(framework.name)) retVal = true
          })
          return retVal
        })
      }

      // Return whatever is left
      return projects
    },
    techs () {
      return techs
    },

    languages () {
      const arr = []
      Object.entries(this.techs.languages).forEach(([k, v]) => {
        arr.push({ id: k, name: v.name })
      })
      return arr
    },

    frameworks () {
      const arr = []
      Object.entries(this.techs.frameworks).forEach(([k, v]) => {
        arr.push({ id: k, name: v.name })
      })
      return arr
    },

    tags () {
      return this.$store.state.tags
    },

    tagProjectTypes: {
      get () {
        return this.tags.projectType
      },
      set (v) {
        this.$store.commit('setProjectTypeTags', v)
      }
    },

    tagLanguages: {
      get () {
        return this.tags.language
      },
      set (v) {
        this.$store.commit('setLanguageTags', v)
      }
    },

    tagFrameworks: {
      get () {
        return this.tags.framework
      },
      set (v) {
        this.$store.commit('setFrameworkTags', v)
      }
    }
  },
  data () {
    return {
      showFilters: false,
      projectSearch: null
    }
  }
}
</script>
<style scoped>
#projects {
  background-image: url('../assets/project_image.jpg');
  color: #fff;
  background-size: cover;
}
.heading-space {
  padding-right: 20px;
}
.v-chip {
  margin: 2px;
}
.v-card__title {
  border-bottom: 1px solid #CCC !important;
  margin-bottom: 10px;
}
.large-card {
  height: 100%;
}
</style>
