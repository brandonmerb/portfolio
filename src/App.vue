<template>
  <v-app>
    <v-app-bar
      app
      color="blue darken-4"
      dark
      inverted-scroll
      :scroll-threshold="height"
    >
      <v-app-bar-nav-icon @click="drawer = true" class="d-inline d-md-none"></v-app-bar-nav-icon>
      <v-app-bar-title class="d-inline d-md-none">
        Brandon Erb: Portfolio site
      </v-app-bar-title>
      <div class="d-none d-md-block">
        <v-btn v-for="link in links" :key="link.target" @click="scroll(link)" color="white" text>
          {{link.text}}
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      src="./assets/nav_sidebar.jpg"
      dark
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.target" @click="scroll(link)">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-divider color="white" class="large-separator"/>
        <v-list-item-group v-model="group2">
          <v-list-item @click="setLocation(`mailto:${email}`)">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{email}}</v-list-item-title>
          </v-list-item>
          <v-list-item  @click="setLocation(`tel:${phoneDigits}`)">
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{phone}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main id="main">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import goTo from 'vuetify/lib/services/goto'
import contact from './store/dataSeed/contact'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      group: null,
      group2: null,

      links: [
        { icon: 'mdi-home', text: 'Home', target: '#home' },
        { icon: 'mdi-cogs', text: 'Skills', target: '#skills' },
        { icon: 'mdi-tooltip-account', text: 'Work History', target: '#workHistory' },
        { icon: 'mdi-clipboard-outline', text: 'Projects', target: '#projects' },
        { icon: 'mdi-email-outline', text: 'Contact', target: '#contact' }
      ]
    }
  },
  computed: {
    height () {
      return 300
    },
    email () {
      return contact.email
    },
    phone () {
      return contact.phone
    },
    phoneDigits () {
      return contact.phoneDigits
    }
  },
  methods: {
    scroll (link) {
      goTo(link.target)
      this.drawer = false
    },
    setLocation (loc) {
      window.location.href = loc
    }
  }
}
</script>
<style>
html, body, .v-application {
  background-color: #fafafa !important;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 1px;
  word-break: break-word;
}
h1 {
  font-size: 40px;
}
h2 {
  font-size: 30px;
}
h3 {
  font-size: 26px;
}
h4 {
  font-size: 22px;
}
h5 {
  font-size: 18px;
}
h6 {
  font-size: 14px;
}

.called-out-heading {
  font-size: 60px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.v-icon {
  color: inherit !important;
}
</style>
<style scoped>
.normal-card {
  background-color: #FFF !important;
}
.normal-card .v-card__text {
  color: #333 !important;
}
.large-separator {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
