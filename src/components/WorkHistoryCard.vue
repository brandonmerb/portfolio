<template>
  <v-card>
    <v-card-title>
      <h2>
        {{ workItem.company }}
      </h2>
    </v-card-title>
    <v-card-text>
      <div class="mb-3">
        <h4>
          {{ workItem.title }}
        </h4>
        <h4>
          {{ getMonthYear(workItem.start) }} - {{ getMonthYear(workItem.end) }}
        </h4>
      </div>
      <v-slide-y-transition>
        <div v-show="!collapsed">
          {{ workItem.description }}
        </div>
      </v-slide-y-transition>
    </v-card-text>

    <v-card-actions>
      <v-row @click="collapsed = !collapsed" class="text-center action-on-card">
        <v-col cols="12">
          <v-icon>
            {{ collapsed ? "mdi-arrow-down" : "mdi-arrow-up" }}
          </v-icon>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default {
  name: 'WorkHistoryCard',
  data () {
    return {
      collapsed: true
    }
  },
  props: {
    workItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    getMonthYear (date) {
      if (date == null) return 'Current'
      const d = new Date(date)
      return monthNames[d.getMonth()] + ' ' + d.getFullYear()
    }
  }
}
</script>
<style scoped>
.action-on-card {
  border-top: 1px solid #ccc;
}
.action-on-card:hover {
  cursor: pointer;
}
</style>
