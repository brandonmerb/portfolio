<template>
  <custom-section fill-height id="workHistory">
    <v-row>
      <v-col cols="12">
        <h1 class="called-out-heading text-center">
          <v-icon size="60" class="heading-space">mdi-tooltip-account</v-icon>Work history
        </h1>
      </v-col>
      <!--<v-col cols="12">
        <vertical-timeline :start="yearStart" :end="yearEnd"/>
      </v-col>-->
      <v-col cols="12">
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(workItem, index) in workHistory" :key="index"
          >
            <template slot="opposite">
              <span>
                {{getMonthYear(workItem.start)}}
              </span>
            </template>
            <work-history-card :work-item="workItem" />
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </custom-section>
</template>
<script>
import CustomSection from '../components/CustomSection.vue'
import WorkHistoryCard from '../components/WorkHistoryCard.vue'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default {
  components: {
    CustomSection,
    WorkHistoryCard
  },
  computed: {
    workHistory () {
      return this.$store.state.workHistory
    }
  },
  data () {
    return {
      yearStart: 2012,
      yearEnd: 2022,
      breaks: [
        { start: 2017, end: 2018, reason: 'Education' }
      ]
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
#workHistory {
  background-image: url('../assets/workHistory.jpg');
  color: #FFF;
  background-size: cover;
}
#workHistory .called-out-heading .v-icon {
  color: #FFF !important;
}
.heading-space {
  padding-right: 20px;
}
</style>
