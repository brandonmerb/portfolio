import Vue from 'vue'
import Vuex from 'vuex'
import skills from './dataSeed/skills'
import work from './dataSeed/work'
import projects from './dataSeed/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allSkills: skills,
    workHistory: work,
    allProjects: projects,

    tags: {
      projectType: [],
      language: [],
      framework: [],
      concepts: []
    }
  },
  mutations: {
    setProjectTypeTags (state, val) {
      state.tags.projectType = val
    },
    setLanguageTags (state, val) {
      state.tags.language = val
    },
    setFrameworkTags (state, val) {
      state.tags.framework = val
    },
    setConceptTags (state, val) {
      state.tags.concepts = val
    }
  },
  actions: {
  },
  modules: {
  }
})
